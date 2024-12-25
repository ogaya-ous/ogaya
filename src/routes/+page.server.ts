import { PrismaClient } from "@prisma/client";
import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { env } from "$env/dynamic/private";
import { dynamoDBClient } from "$lib/dynamodbClient";
import { s3Client } from "$lib/s3Client";
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({ log: ["query", "info"] });

export const load: PageServerLoad = async () => {
    // DynamoDBのパラメータ
    const dynamoParams = {
        TableName: "Device", // DynamoDBテーブル名
    };

    // S3のパラメータ
    const s3Params = {
        Bucket: "repellent", // S3バケット名
        Prefix: "images/",
    };

    try {
        // 並列で非同期操作を実行
        const [newsData, dynamoData, s3Data] = await Promise.all([
            prisma.news.findMany({
                where: {
                    delete_flag: false, // 削除フラグがFalseのデータのみ取得
                },
                orderBy: {
                    news_id: "desc", // 降順
                },
                take: 3,
            }),
            dynamoDBClient.send(new ScanCommand(dynamoParams)),
            s3Client.send(new ListObjectsV2Command(s3Params)),
        ]);

        // DynamoDBのデータを取得し、idが最大のデータを選択
        const items = dynamoData.Items || [];
        const latestItem = items.reduce((maxItem, item) => {
            const currentId = parseInt(item.id?.S || "0", 10); // DynamoDBの数値は文字列なので変換
            const maxId = parseInt(maxItem?.id?.S || "0", 10);
            return currentId > maxId ? item : maxItem;
        }, null);

        // S3から最新の画像を取得
        const latestImage = s3Data.Contents?.reduce((latest, item) => {
            if (!latest || (item.LastModified && item.LastModified > latest.LastModified)) {
                return item;
            }
            return latest;
        }, null);

        // 最新画像のURLを生成
        const imageUrl = latestImage
            ? `https://repellent.s3.${env.AWS_REGION}.amazonaws.com/${latestImage.Key}`
            : null;

        return {
            news: newsData, // ニュースデータ
            latestItem, // DynamoDBの最新データ
            imageUrl, // 最新画像のURL
        };
    } catch (error) {
        console.error("Error fetching data:", error);

        return {
            news: [],
            latestItem: null,
            imageUrl: null,
        };
    }
};
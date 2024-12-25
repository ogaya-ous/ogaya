import { S3Client } from "@aws-sdk/client-s3";
import { env } from '$env/dynamic/private';

// S3クライアントの設定
export const s3Client = new S3Client({
    region: env.AWS_REGION, // 例: 'us-east-1'
    credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY
    }
});
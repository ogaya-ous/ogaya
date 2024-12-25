import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { env } from '$env/dynamic/private';

// DynamoDBクライアントの設定
export const dynamoDBClient = new DynamoDBClient({
    region: env.AWS_REGION, // 例: 'us-east-1'
        credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY
    }
});
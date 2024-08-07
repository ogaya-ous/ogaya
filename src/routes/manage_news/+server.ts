import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const DELETE: RequestHandler = async ({ url }) => {
    const newsId = Number(url.searchParams.get('news_id'));
    console.log(newsId);

    if (!newsId) {
        return new Response('Invalid newsId ID', { status: 400 });
    }

    try {
        await prisma.news.update({
            where: { news_id: newsId },
            data: { delete_flag: true }
        });

        return new Response('Document deleted successfully');
    } catch (error) {
        console.error('Error deleting document:', error);
        return new Response('Error deleting document', { status: 500 });
    }
};
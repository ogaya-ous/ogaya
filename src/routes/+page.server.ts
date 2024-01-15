import { PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({log: ['query', 'info']});

export const load: PageServerLoad = async ({ url }) => {
    const news = await prisma.news.findMany({
        orderBy: {
            news_id: 'desc'
        },
        take: 3,
    })
    return {news};
}
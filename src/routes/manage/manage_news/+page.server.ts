import { PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({log: ['query', 'info']});

export const load: PageServerLoad = async ({ url }) => {
    const news = await prisma.news.findMany({
        where: {
            delete_flag: false  // 削除フラグがFalseのデータのみ取得
        },
        orderBy: {
            news_id: 'desc'
        },
    })
    return {news};
}
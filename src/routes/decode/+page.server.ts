import { PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({log: ['query', 'info']});

export const load: PageServerLoad = async ({ url }) => {
    const decoded = await prisma.decoded.findMany({
        where: {
            delete_flag: false  // 削除フラグがFalseのデータのみ取得
        },
        orderBy: {
            decoded_id: 'desc'
        },
    })
    return {decoded};
}
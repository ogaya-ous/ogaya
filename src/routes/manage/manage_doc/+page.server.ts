import { PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({log: ['query', 'info']});

export const load: PageServerLoad = async ({ url }) => {
    const documents = await prisma.document.findMany({
        where: {
            delete_flag: false  // 削除フラグがFalseのデータのみ取得
        },
        orderBy: {
            document_id: 'desc'
        },
    })
    return { documents };
}

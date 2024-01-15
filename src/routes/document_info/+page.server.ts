import { PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({log: ['query', 'info']});


export const load: PageServerLoad = async ({ url }) => {
    const document_id = Number(url.searchParams.get('document_id'));
    // let user_name = null;

    const document = await prisma.document.findUnique({
        where: {
            document_id: document_id
        }
    });

    const history = await prisma.history.findMany({
        where: {
            document_id: document_id
        },
        take: 5,
        orderBy: {
            history_id: 'desc'
        }
    });

    const userPromises = history.map((historyItem) => {
        return prisma.user.findUnique({
            where: {
                id: historyItem.user_id
            }
        });
    });

    const users = await Promise.all(userPromises);
    //console.log(history[0].user_id)

    return { document, document_id , history, users};
}
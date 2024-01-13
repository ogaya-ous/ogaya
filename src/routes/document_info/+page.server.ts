import { PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({log: ['query', 'info']});


export const load: PageServerLoad = async ({ url }) => {
    const document_id = Number(url.searchParams.get('document_id'));
    const document = await prisma.document.findUnique({
        where: {
            document_id: document_id
        }
    });
    return { document };
}

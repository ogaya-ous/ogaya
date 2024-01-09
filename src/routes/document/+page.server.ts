import { PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({log: ['query', 'info']});

export const load: PageServerLoad = async ({ url }) => {
    const page_num = url.searchParams.get('page') - 1;
    const documents = await prisma.document.findMany({
        skip: page_num * 5,
        take: 5
    });
    console.log({ documents})
    return { documents };
}

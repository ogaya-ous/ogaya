import { PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({log: ['query', 'info']});


export const load: PageServerLoad = async ({ url }) => {
    const decoded_id = Number(url.searchParams.get('decoded_id'));
    // let user_name = null;

    const decoded = await prisma.decoded.findUnique({
        where: {
            decoded_id: decoded_id
        }
    });

    return { decoded};
}
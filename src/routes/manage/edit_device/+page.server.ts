import { PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({log: ['query', 'info']});

export const load: PageServerLoad = async ({ url }) => {
    const device = await prisma.device.findUnique({
        where: {
            device_id: 1,  // device_id が 1 のものを取得
        },
    });
    console.log(device);
    return { device };
}
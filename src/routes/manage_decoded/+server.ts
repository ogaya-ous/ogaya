import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const DELETE: RequestHandler = async ({ url }) => {
    const decodedId = Number(url.searchParams.get('decoded_id'));
    console.log(decodedId);

    if (!decodedId) {
        return new Response('Invalid decoded ID', { status: 400 });
    }

    try {
        await prisma.decoded.update({
            where: { decoded_id: decodedId },
            data: { delete_flag: true }
        });

        return new Response('Document deleted successfully');
    } catch (error) {
        console.error('Error deleting document:', error);
        return new Response('Error deleting document', { status: 500 });
    }
};
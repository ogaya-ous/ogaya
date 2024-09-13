import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const DELETE: RequestHandler = async ({ url }) => {
    const documentId = Number(url.searchParams.get('document_id'));
    console.log(documentId);

    if (!documentId) {
        return new Response('Invalid document ID', { status: 400 });
    }

    try {
        await prisma.document.update({
            where: { document_id: documentId },
            data: { delete_flag: true }
        });

        return new Response('Document deleted successfully');
    } catch (error) {
        console.error('Error deleting document:', error);
        return new Response('Error deleting document', { status: 500 });
    }
};
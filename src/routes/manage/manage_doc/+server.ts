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

export const PATCH: RequestHandler = async ({ url }) => {
    const documentId = Number(url.searchParams.get('document_id'));
    console.log(documentId);
    console.log('test')

    if (!documentId) {
        return new Response('Invalid document ID', { status: 400 });
    }

    try {
        const document = await prisma.document.findUnique({
            where: { document_id: documentId },
            select: { complete_flag: true }
        });
        
        if(!document) {
            return new Response('Document not found', { status: 404 });
        }

        const newCompleteFlag = !document.complete_flag;

        await prisma.document.update({
            where: { document_id: documentId },
            data: { complete_flag: newCompleteFlag }
        });

        console.log(newCompleteFlag);

        return new Response('Document completed successfully');
    } catch (error) {
        console.error('Error completing document:', error);
        return new Response('Error completing document', { status: 500 });
    }
};
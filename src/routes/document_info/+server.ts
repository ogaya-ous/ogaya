import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({log: ['query', 'info']});


export async function GET({ url }) {
    const history_id: number = url.searchParams.get('/document_info?history_id')

    const history = await prisma.history.findUnique({
        where: {
            history_id: Number(history_id)
        }
    });

    const document_text = history.decoding_content;
    return new Response(document_text, {
        headers: {
            'content-type': 'text/plain;charset=UTF-8',
        }
    });
}


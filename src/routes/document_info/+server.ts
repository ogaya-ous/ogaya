import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({log: ['query', 'info']});


export async function GET({ url }) {
    const history_id: number = url.searchParams.get('/document_info?history_id')

    const history = await prisma.history.findUnique({
        where: {
            history_id: Number(history_id)
        }
    });
    const decoding_content = history.decoding_content;
    const decoding_gpt = history.decoding_gpt.replace(/<br>/g, "\n");

    const document_text = '翻刻文章\n' + decoding_content+'\n\n'+'翻訳文章\n'+decoding_gpt;
    return new Response(document_text, {
        headers: {
            'content-type': 'text/plain;charset=UTF-8',
        }
    });
}


import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';

import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate, StructuredPrompt } from "@langchain/core/prompts";
import { StructuredOutputParser } from "langchain/output_parsers";
import { OPENAI_API_KEY } from '$env/static/private';


const TEMPLATE = `
    あなたは古文書の翻訳に精通したスペシャリストです。
    以下の文章を現代文に翻訳してjson形式で答えてください。
    また、jsonでの現代文が入るキーを「answer」としてください。
    また、句点の後には必ず改行を入れてください。
    文章: {text}
`;


export const POST: RequestHandler = async ({ request }) => {
    try {
        const body = await request.json();
        const { message } = body;
        console.log(message);

        const openai = new ChatOpenAI({
            apiKey: OPENAI_API_KEY,
            model: 'gpt-4o-mini',
            modelKwargs: { response_format: { type: 'json_object' } },
        });

        const prompt = new PromptTemplate({
            template: TEMPLATE,
            inputVariables: ['text'],
        });

        const chain = prompt
            .pipe(openai)
            .pipe(StructuredOutputParser.fromNamesAndDescriptions({
                answer: '古文書の翻訳結果',
            }));

        const response = await chain.invoke({ text: message });
        console.log(response);

        return new Response(JSON.stringify(response), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error('Error deciphering text:', error);
        return new Response('Error deciphering text', { status: 500 });
    }
};  

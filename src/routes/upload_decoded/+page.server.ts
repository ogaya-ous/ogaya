import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';
import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import { put } from '@vercel/blob';

const prisma = new PrismaClient({log: ['query', 'info']});

export const actions = {
  upload_decoded: async ({ request }) => {
    const form = await request.formData()
    const file = form.get('image-upload') as File
    const title = form.get('name') as string
    const explain = form.get('decoded_explain') as string
    const content = form.get('decoded_content') as string
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    if (!file) {
      error(400, { message: 'No file to upload.' })
    }

    const { url } = await put(file.name, file, {
      access: 'public',
      token: BLOB_READ_WRITE_TOKEN,
    })

    await prisma.decoded.create({
      data: {
        decoded_name: title,
        decoded_path: url,
        decoded_explain: explain,
        decoded_content: content,
        added_year: currentYear,
        added_month: currentMonth,
        added_day: currentDay
      },
    })

    return { uploaded: url }
  },
}

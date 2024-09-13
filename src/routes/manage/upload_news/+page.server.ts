import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';
import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import { put } from '@vercel/blob';

const prisma = new PrismaClient({log: ['query', 'info']});
// console.log(prisma)
export const actions = {
  upload_news: async ({ request }) => {
		const form = await request.formData()
		const file = form.get('image-upload') as File
		const title = form.get('name') as string
		const explain = form.get('news_explain') as string
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

		await prisma.news.create({
			data: {
				news_name: title,
				news_path: url,
				news_explain: explain,
				added_year: currentYear,
				added_month: currentMonth,
				added_day: currentDay
			}
		})

		return {uploaded: url}
	},
}
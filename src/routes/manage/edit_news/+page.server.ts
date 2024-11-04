import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';
import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import { put } from '@vercel/blob';

const prisma = new PrismaClient({log: ['query', 'info']});
// console.log(prisma)
export const load: PageServerLoad = async ({ url }) => {
	const newsId = Number(url.searchParams.get('news_id'));
  
	const news = await prisma.news.findUnique({
		where: {
			news_id: newsId
		}
	});
	// console.log(document);
	return news;
  }

export const actions = {
  update_news: async ({ request }) => {
		const form = await request.formData()
		const news_id = form.get('news_id') 
		const file = form.get('image-upload') as File
		const title = form.get('name') as string
		const explain = form.get('news_explain') as string
		const added_date = form.get('example')
		let url = form.get('news_path')
		const date = new Date(added_date);
		const year = date.getFullYear();
		const month = date.getMonth() + 1; // 月は0から始まるので、1を加えます
		const day = date.getDate();

		console.log(file)
		if (file && file.name) {
			url = await put(file.name, file, {
				access: 'public',
				token: BLOB_READ_WRITE_TOKEN,
			})
		}

		await prisma.news.update({
			where: { news_id: Number(news_id) },
			data: {
				news_name: title,
				news_path: url,
				news_explain: explain,
				added_year: year,
				added_month: month,
				added_day: day
			}
		})

		return {uploaded: url}
	},
}
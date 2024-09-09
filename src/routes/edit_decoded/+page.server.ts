import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';
import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import { put } from '@vercel/blob';

const prisma = new PrismaClient({log: ['query', 'info']});

export const load: PageServerLoad = async ({ url }) => {
  const decodedId = Number(url.searchParams.get('decoded_id'));

  const decoded = await prisma.decoded.findUnique({
      where: {
          decoded_id: decodedId
      }
  });
  return decoded;
}

export const actions = {
  update: async ({ request }) => {
    const form = await request.formData()
    const decoded_id = form.get('decoded_id')
    const file = form.get('image-upload') as File
    let url = form.get('decoded_path')
    const title = form.get('name') as string
    const explain = form.get('decoded_explain') as string
    const content = form.get('decoded_content') as string
    // const date = new Date();
    // const currentDay = date.getDate();
    // const currentMonth = date.getMonth() + 1;
    // const currentYear = date.getFullYear();

		if (file && file.name) {
			url = await put(file.name, file, {
				access: 'public',
				token: BLOB_READ_WRITE_TOKEN,
			})
		}

    await prisma.decoded.update({
      where: { decoded_id: Number(decoded_id) },
      data: {
        decoded_name: title,
        decoded_path: url,
        decoded_explain: explain,
        decoded_content: content
      },
    })

    return { uploaded: url }
  },
}


import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';
import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import { put } from '@vercel/blob';

const prisma = new PrismaClient({log: ['query', 'info']});

export const load: PageServerLoad = async ({ url }) => {
  const documentId = Number(url.searchParams.get('document_id'));

  const document = await prisma.document.findUnique({
      where: {
          document_id: documentId
      }
  });
  return document;
}

export const actions = {
  update: async ({ request }) => {
    const form = await request.formData()
    const document_id = form.get('document_id')
    const file = form.get('image-upload') as File
    let url = form.get('document_path')
    const title = form.get('name') as string
    const explain = form.get('document_explain') as string
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

    await prisma.document.update({
      where: { document_id: Number(document_id) },
      data: {
        document_name: title,
        document_path: url,
        document_explain: explain
      },
    })

    return { uploaded: url }
  },
}


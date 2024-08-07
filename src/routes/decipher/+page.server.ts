import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({log: ['query', 'info']});
let user_id: string;
let document_id: number;
const dt = new Date();
const currentDay = dt.getDate();
const currentMonth = dt.getMonth() + 1;
const currentYear = dt.getFullYear();
let session = null;

export const load: PageServerLoad = async (event) => {
  session = await event.locals.getSession();
  document_id = Number(event.url.searchParams.get('document_id'));
  if (session) {
    user_id = session.user.id;
  }
  const document = await prisma.document.findUnique({
    where: {
        document_id: document_id
    }
  });
  return { session , document_id, document};
}

export const actions = {
  upload: async ({ request }) => {
    const form = await request.formData();
    const form_text = form.get('text-decipher') as string;

    if (!form_text) {
      error(400, { message: 'No text of decipher' })
    }

    if (!session) {
      error(400, { message: 'No session' })
    }
    await prisma.history.create({
      data: {
        user_id: user_id,
        document_id: document_id,
        decoding_content: form_text,
        added_day: currentDay,
        added_month: currentMonth,
        added_year: currentYear
      },
    })

    return { success: true};
  },
}

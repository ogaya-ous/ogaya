import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({log: ['query', 'info']});
let user_id: string;
let document_id: number;
let history_id: number;
const dt = new Date();
const currentDay = dt.getDate();
const currentMonth = dt.getMonth() + 1;
const currentYear = dt.getFullYear();
let session = null;

export const load: PageServerLoad = async (event) => {
  session = await event.locals.getSession();
  document_id = Number(event.url.searchParams.get('document_id'));
  history_id = Number(event.url.searchParams.get('history_id'));

  if (session) {
    user_id = session.user.id;
  }
  const document = await prisma.document.findUnique({
    where: {
        document_id: document_id
    }
  });
  const history = await prisma.history.findUnique({
    where: {
        history_id: history_id
    }
  });

  return { session , document_id, document, history};
}


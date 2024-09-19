import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

const prisma = new PrismaClient({log: ['query', 'info']});
let user_id: string;
let user;
let document_id: number;
let history_id: number;
let session = null;

export const load: PageServerLoad = async (event) => {
  session = await event.locals.getSession();
  if (session) {
    user_id = session.user.id;
    user = session.user;
  }
  const history = await prisma.history.findMany({
    where: {
        user_id: user_id
    },
    include: {
      document: true,
    },
    orderBy: [
      {history_id: 'desc'}
    ]
  });

  return { session , history};
}


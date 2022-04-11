import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const cast = async () => {
  await prisma.cast.createMany({
    data: [
      {
        castName: 'りか',
        castKana: 'リカ',
        castIcon: '🐰',
      },
      {
        castName: 'そら',
        castKana: 'ソラ',
        castIcon: '🐼',
      },
      {
        castName: 'あいり',
        castKana: 'アイリ',
        castIcon: '🐹',
      },
    ],
  });
};

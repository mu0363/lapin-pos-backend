import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const cast = async (userId: string) => {
  await prisma.cast.createMany({
    data: [
      {
        castName: 'りか',
        castKana: 'リカ',
        castIcon: '🐰',
        userId,
      },
      {
        castName: 'そら',
        castKana: 'ソラ',
        castIcon: '🐼',
        userId,
      },
      {
        castName: 'あいり',
        castKana: 'アイリ',
        castIcon: '🐹',
        userId,
      },
    ],
  });
};

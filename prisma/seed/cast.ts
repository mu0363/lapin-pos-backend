import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const cast = async (userId: string) => {
  await prisma.cast.createMany({
    data: [
      {
        id: 1,
        castName: 'りか',
        castKana: 'リカ',
        castIcon: '🐰',
        lastWorkDate: null,
        userId,
      },
      {
        id: 2,
        castName: 'そら',
        castKana: 'ソラ',
        castIcon: '🐼',
        lastWorkDate: null,
        userId,
      },
      {
        id: 3,
        castName: 'あいり',
        castKana: 'アイリ',
        castIcon: '🐹',
        lastWorkDate: null,
        userId,
      },
      {
        id: 4,
        castName: 'すず',
        castKana: 'スズ',
        castIcon: '🧸',
        lastWorkDate: null,
        userId,
      },
      {
        id: 5,
        castName: 'せな',
        castKana: 'セナ',
        castIcon: '🤑',
        lastWorkDate: null,
        userId,
      },
    ],
  });
};

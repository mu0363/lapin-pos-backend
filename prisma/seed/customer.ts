import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const customer = async (userId: string) => {
  await prisma.customer.createMany({
    data: [
      {
        id: 4,
        customerKana: 'ノボリン',
        customerName: 'NOBOりん',
        birthDay: null,
        receipt: '',
        lastVisitDate: new Date(),
        castId: null,
        userId,
      },
      {
        id: 6,
        customerKana: 'ケーーーーン',
        customerName: 'ケーーーーン',
        birthDay: null,
        receipt: '',
        lastVisitDate: new Date(),
        castId: null,
        userId,
      },
      {
        id: 7,
        customerKana: 'ナミナミ',
        customerName: 'なみなみ',
        birthDay: null,
        receipt: '',
        lastVisitDate: new Date(),
        castId: null,
        userId,
      },
      {
        id: 8,
        customerKana: 'プラッチ',
        customerName: 'ぷらっち',
        birthDay: null,
        receipt: '',
        lastVisitDate: new Date(),
        castId: null,
        userId,
      },
      {
        id: 9,
        customerKana: 'グリマネ',
        customerName: 'グリマネ',
        birthDay: null,
        receipt: '',
        lastVisitDate: new Date(),
        castId: null,
        userId,
      },
    ],
  });
};

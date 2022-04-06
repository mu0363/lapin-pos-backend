import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const customer = async () => {
  await prisma.customer.createMany({
    data: [
      {
        customerKana: 'タナカ カクエイ',
        customerName: '田中 角栄',
        birthDay: '1970-08-07T11:57:57.012Z',
        receipt: '株式会社 田中',
        castId: 1,
      },
      {
        customerKana: 'サトウ トシロウ',
        customerName: '佐藤 敏朗',
        birthDay: '1972-05-27T11:57:57.012Z',
        receipt: '佐藤商事株式会社',
        castId: 1,
      },
      {
        customerKana: 'タケチャン',
        customerName: 'たけちゃん',
        birthDay: '1968-11-14T11:57:57.012Z',
        receipt: 'たけちゃんカンパニー.inc',
        castId: 1,
      },
    ],
  });
};

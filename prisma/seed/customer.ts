import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const customer = async () => {
  await prisma.customer.createMany({
    data: [
      {
        customerKana: 'タナカ カクエイ',
        customerName: '田中 角栄',
        receipt: '株式会社 田中',
        castId: 1,
      },
      {
        customerKana: 'サトウ トシロウ',
        customerName: '佐藤 敏朗',
        receipt: '佐藤商事株式会社',
        castId: 1,
      },
      {
        customerKana: 'タケチャン',
        customerName: 'たけちゃん',
        receipt: 'たけちゃんカンパニー.inc',
        castId: 1,
      },
    ],
  });
};

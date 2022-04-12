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
        userId: '506a9d6c-71f8-4821-bfca-fc1e093bdcc9',
      },
      {
        customerKana: 'サトウ トシロウ',
        customerName: '佐藤 敏朗',
        receipt: '佐藤商事株式会社',
        castId: 1,
        userId: '506a9d6c-71f8-4821-bfca-fc1e093bdcc9',
      },
      {
        customerKana: 'タケチャン',
        customerName: 'たけちゃん',
        receipt: 'たけちゃんカンパニー.inc',
        castId: 1,
        userId: '506a9d6c-71f8-4821-bfca-fc1e093bdcc9',
      },
    ],
  });
};

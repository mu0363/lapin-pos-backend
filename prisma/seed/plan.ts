import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const plan = async () => {
  await prisma.plan.createMany({
    data: [
      {
        planName: 'ボトルキープ 60分',
        price: 6000,
        userId: '506a9d6c-71f8-4821-bfca-fc1e093bdcc9',
      },
      {
        planName: '単品プラン',
        price: 8000,
        userId: '506a9d6c-71f8-4821-bfca-fc1e093bdcc9',
      },
      {
        planName: 'ボトルキープ フリータイム(4時間制)',
        price: 13000,
        userId: '506a9d6c-71f8-4821-bfca-fc1e093bdcc9',
      },
    ],
  });
};

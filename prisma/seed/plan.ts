import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const plan = async () => {
  await prisma.plan.createMany({
    data: [
      {
        planName: 'ボトルキープ 60分',
        price: 6000,
      },
      {
        planName: '単品プラン',
        price: 8000,
      },
      {
        planName: 'ボトルキープ フリータイム(4時間制)',
        price: 13000,
      },
    ],
  });
};

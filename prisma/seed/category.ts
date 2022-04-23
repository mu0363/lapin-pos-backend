import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const category = async (userId: string) => {
  await prisma.category.createMany({
    data: [
      { categoryName: '焼酎', userId },
      { categoryName: '梅酒等', userId },
      { categoryName: 'ブランデー&ウィスキー', userId },
      { categoryName: 'Champagne', userId },
      { categoryName: 'Coffee', userId },
      { categoryName: 'Beer&Glass', userId },
      { categoryName: '割もの', userId },
      { categoryName: 'その他', userId },
      { categoryName: 'ワイン', userId },
    ],
  });
};

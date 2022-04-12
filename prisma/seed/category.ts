import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const category = async () => {
  await prisma.category.createMany({
    data: [
      { categoryName: '焼酎' },
      { categoryName: '梅酒等' },
      { categoryName: 'ブランデー&ウィスキー' },
      { categoryName: 'Champagne' },
      { categoryName: 'Coffee' },
      { categoryName: 'Beer&Glass' },
      { categoryName: '割もの' },
    ],
  });
};

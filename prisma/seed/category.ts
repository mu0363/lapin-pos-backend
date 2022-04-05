import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const category = async () => {
  await prisma.category.createMany({
    data: [
      { categoryName: '焼酎', categoryIcon: '🍶' },
      { categoryName: '梅酒等', categoryIcon: '🥂' },
      { categoryName: 'ブランデー&ウィスキー', categoryIcon: '🥃' },
      { categoryName: 'Champagne', categoryIcon: '🍾' },
      { categoryName: 'Coffee', categoryIcon: '☕' },
      { categoryName: 'Beer&Glass', categoryIcon: '🍺' },
      { categoryName: '割もの', categoryIcon: '🧃' },
      { categoryName: 'プラン', categoryIcon: '🎉' },
      { categoryName: '割引', categoryIcon: '🔻' },
      { categoryName: '延長', categoryIcon: '🕐' },
    ],
  });
};

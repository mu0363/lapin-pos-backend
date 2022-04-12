import { PrismaClient } from '@prisma/client';
import { category } from './category';
import { item } from './item';

const prisma = new PrismaClient();

async function main() {
  await prisma.item.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();
  await category();
  await item();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

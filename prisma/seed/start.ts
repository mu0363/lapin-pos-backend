import { PrismaClient } from '@prisma/client';
import { cast } from './cast';
import { category } from './category';
import { customer } from './customer';
import { item } from './item';

const prisma = new PrismaClient();

async function main() {
  await prisma.item.deleteMany();
  await prisma.category.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.cast.deleteMany();
  await prisma.user.deleteMany();
  await cast();
  await category();
  await item();
  await customer();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

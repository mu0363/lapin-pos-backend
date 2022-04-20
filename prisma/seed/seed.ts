import { PrismaClient } from '@prisma/client';
import { cast } from './cast';
import { category } from './category';
import { customer } from './customer';
import { item } from './item';
import { plan } from './plan';

const prisma = new PrismaClient();

async function main() {
  const userId = 'f7e5bb0a-13a6-4cf4-8894-8e14c6daa8bf';
  await prisma.item.deleteMany();
  await prisma.category.deleteMany();
  await prisma.plan.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.cast.deleteMany();
  await cast(userId);
  await customer(userId);
  await plan(userId);
  await category();
  await item(userId);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

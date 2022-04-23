import { PrismaClient } from '@prisma/client';
import { cast } from './cast';
import { category } from './category';
import { customer } from './customer';
import { item } from './item';
import { plan } from './plan';
import { sales } from './sales';

const prisma = new PrismaClient();

async function main() {
  const userId = '50e68a59-7ae9-496a-8dbd-f2e746dd99a0';
  await prisma.item.deleteMany();
  await prisma.category.deleteMany();
  await prisma.plan.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.cast.deleteMany();
  await prisma.sale.deleteMany();
  await cast(userId);
  await customer(userId);
  await plan(userId);
  await category(userId);
  await item(userId);
  await sales(userId);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

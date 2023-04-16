import { PrismaClient } from '@prisma/client';
import { cast } from './cast';
import { category } from './category';
import { customer } from './customer';
import { item } from './item';
import { plan } from './plan';
import { sales } from './sales';

const prisma = new PrismaClient();

async function main() {
  const userId = 'c38af6c2-adc5-4019-a270-598acd85158d';
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

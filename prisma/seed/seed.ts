import { PrismaClient } from '@prisma/client';
import { cast } from './cast';
import { category } from './category';
import { customer } from './customer';
import { item } from './item';
import { plan } from './plan';

const prisma = new PrismaClient();

async function main() {
  const userId = 'bbe7e06c-7aa0-407e-9a65-8c3e7ed8dacd';
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

import prisma, { Role } from '../src/config/db.js'
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
dotenv.config();

const hashedPassword = await bcrypt.hash("123456789", 10);

async function main() {
  // clear existing rows (order matters because of FKs)
  await prisma.chefItems.deleteMany({});
  await prisma.drinkItem.deleteMany({});
  await prisma.foodItem.deleteMany({});
  await prisma.chef.deleteMany({});

  const chef1 = await prisma.chef.create({
    data: {
      name: 'Gordon Ramsay',
      email: 'gordon@example.com',
      password: hashedPassword,
      role: Role.HEAD_CHEF,
    },
  });

  const chef2 = await prisma.chef.create({
    data: {
      name: 'Christina Wilson',
      email: 'christina@example.com',
      password: hashedPassword,
      role: Role.SOUS_CHEF,
    },
  });

  const chef3 = await prisma.chef.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      password: hashedPassword,
      role: Role.SOUS_CHEF,
    },
  });

  const pizza = await prisma.foodItem.create({
    data: { name: 'Pizza', price: 12.99 },
  });

  const pasta = await prisma.foodItem.create({
    data: { name: 'Pasta', price: 11.99 },
  });

  const redHouseWine = await prisma.drinkItem.create({
    data: { name: 'House Red Wine', price: 8.0 },
  });

  const margarita = await prisma.drinkItem.create({
    data: { name: 'Margarita', price: 15 },
  });

  await prisma.chefItems.create({
    data: {
      chefId: chef1.id,
      foodItemId: pizza.id,
      drinkItemId: redHouseWine.id,
    },
  });

  await prisma.chefItems.create({
    data: {
      chefId: chef2.id,
      foodItemId: pasta.id,
      drinkItemId: margarita.id,
    },
  });

  console.log('Seeded');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
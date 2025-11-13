import prisma, { Role } from '../src/config/db.js'

async function main() {
  // clear existing rows
  await prisma.chefItems.deleteMany({});
  await prisma.foodItem.deleteMany({});
  await prisma.chef.deleteMany({});

  const chef1 = await prisma.chef.create({
    data: {
      name: "Gordon Ramsay",
      email: "gordon@example.com",
      password: "123456789",
      role: Role.HEAD_CHEF,
    },
  });

  const chef2 = await prisma.chef.create({
    data: {
      name: "Christina Wilson",
      email: "christina@example.com",
      password: "123456789",
      role: Role.SOUS_CHEF,
    },
  });

  const chef3 = await prisma.chef.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
      password: "12345789",
      role: Role.SOUS_CHEF,
    },
  });

  const pizza = await prisma.foodItem.create({
    data: { name: "Pizza", price: 12.99 },
  });

  const pasta = await prisma.foodItem.create({
    data: { name: "Pasta", price: 11.99 },
  });

  await prisma.chefItems.create({
    data: {
      chefId: chef1.id,
      foodItemId: pizza.id,
    },
  });

  await prisma.chefItems.create({
    data: {
      chefId: chef2.id,
      foodItemId: pasta.id,
    },
  });

  console.log("Seeded");
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

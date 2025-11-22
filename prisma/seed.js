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
  await prisma.comboItems.deleteMany({});
  await prisma.combo.deleteMany({});
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

	const colaMedium = await prisma.drinkItem.create({
		data: { name: 'Cola', price: 2 },
	});                                                 	
	const hamburgor = await prisma.foodItem.create({
		data: { name: 'hamburgor', price: 5.99 },
	});

	const fries = await prisma.foodItem.create({
		data: { name: 'fries', price: 2.99 },
	});

  const margarita = await prisma.drinkItem.create({
    data: { name: 'Margarita', price: 15 },
  });

  	const happyMeal = await prisma.combo.create({
		data: { name: 'Happy Meal', price: 7.99 },
  	});

	await prisma.comboItems.createMany({ 
		data: [
    		{ comboId: happyMeal.id, foodItemId: fries.id },
    		{ comboId: happyMeal.id, foodItemId: hamburgor.id },
  		],
	});

	await prisma.comboDrinkItems.create({ 
		data: {
			comboId: happyMeal.id, drinkItemId: colaMedium.id 
		},
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

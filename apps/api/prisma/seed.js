import {PrismaClient} from '@prisma/client'

async function dynamicSeed(prisma) {
  console.log("🌱 Seeding dynamic stand")

  await prisma.todo.upsert({
    where: {id: 1},
    update: {},
    create: {
      value: 'Read books',
      createdAt: new Date()
    }
  })
  await prisma.todo.upsert({
    where: {id: 2},
    update: {},
    create: {
      value: 'Buy milk',
      createdAt: new Date()
    }
  })
  console.log("✅ Todos")
}

if (proccess.env.NODE_ENV === 'dynamic') {
  const prisma = new PrismaClient()

  dynamicSeed(prisma)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
}

const {PrismaClient} = require('@prisma/client')

async function previewSeed(prisma) {
  console.log("🌱 Seeding preview stand")

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

if (process.env.NODE_ENV !== 'production') {
  (async () => {
    const prisma = new PrismaClient()

    try {
      if (process.env.NODE_ENV === 'preview') {
        await previewSeed(prisma)
      }

      // Extend here: "process.env.NODE_ENV === 'test' e.g.

      await prisma.$disconnect()
    } catch (e) {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    }
  })();
}

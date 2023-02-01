import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.todo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      value: 'Read books',
      createdAt: new Date()
    }
  })

  await prisma.todo.upsert({
    where: { id: 2 },
    update: {},
    create: {
      value: 'Buy milk',
      createdAt: new Date()
    }
  })
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

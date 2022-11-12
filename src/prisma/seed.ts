import prisma from './prisma'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const seed = async () => {
  return await prisma.$transaction(
    async (prisma) => {
      //todo
    },
    { maxWait: 20000, timeout: 200000 },
  )
}
export default seed

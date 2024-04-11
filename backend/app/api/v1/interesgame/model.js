import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

 export async function createInterestGame(nameGame, categoryGame, userId) {
   return prisma.interestGame.create({
     data: {
      nameGame,
      categoryGame,
      ...(userId ? { userId } : {}),
     }
   });
 }

export async function getAllInterestGames() {
  return prisma.interestGame.findMany();
}





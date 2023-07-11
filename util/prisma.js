import { PrismaClient } from '@prisma/client';

let prismaDB;

if (process.env.NODE_ENV === 'production') {
  prismaDB = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prismaDB = global.prisma;
}

export { prismaDB };
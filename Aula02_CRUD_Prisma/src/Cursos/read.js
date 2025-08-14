import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();   

// funçaõ exibr os cursos
async function main() {
    const result = await prisma.cursos.findMany();
    // Exibir os cursos
    console.log(result);
}

main();
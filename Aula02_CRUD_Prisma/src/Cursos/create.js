import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();   

// funçaõ para criar novos curos 
async function main() {
    const result = await prisma.cursos.create({
        data: {
            name: "materia para ser deletada",
            description: "materia para ser deletada",
            duration: 1200
        }
    });
    console.log(result);
}

main();
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();   

// funçaõ exibr curos pelo id
async function main() {
    const result = await prisma.cursos.findUnique({
        where: {
            id: "a4b6bdb1-1aca-449c-9a93-e05767acfb3a"
        }    
    });
    // Exibir curso pelo id
    console.log(result);
}

main();
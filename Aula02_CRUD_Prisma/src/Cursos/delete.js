import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.cursos.delete({
        where: {
            id: "3f2aec54-515c-4fca-85d7-2ee12e64bff5"
        }
    });
    // Exibir curso deletado
    console.log(result);
}   

main()

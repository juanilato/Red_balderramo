-- DropForeignKey
ALTER TABLE "Form" DROP CONSTRAINT "Form_userId_fkey";

-- AlterTable
ALTER TABLE "Form" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

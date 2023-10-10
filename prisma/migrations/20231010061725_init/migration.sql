/*
  Warnings:

  - You are about to drop the `_CitySMToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CitySMToUser" DROP CONSTRAINT "_CitySMToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CitySMToUser" DROP CONSTRAINT "_CitySMToUser_B_fkey";

-- DropTable
DROP TABLE "_CitySMToUser";

-- CreateTable
CREATE TABLE "UserCitySM" (
    "cityId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserCitySM_pkey" PRIMARY KEY ("cityId","userId")
);

-- AddForeignKey
ALTER TABLE "UserCitySM" ADD CONSTRAINT "UserCitySM_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCitySM" ADD CONSTRAINT "UserCitySM_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "CitySM"("cityId") ON DELETE RESTRICT ON UPDATE CASCADE;

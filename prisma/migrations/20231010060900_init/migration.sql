-- CreateTable
CREATE TABLE "User" (
    "telegramId" TEXT NOT NULL,
    "telegramName" TEXT NOT NULL,
    "firstName" TEXT,
    "login" TEXT,
    "password" TEXT,
    "email" TEXT,
    "countBonuses" INTEGER NOT NULL DEFAULT 0,
    "isBan" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("telegramId")
);

-- CreateTable
CREATE TABLE "Account" (
    "accountId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passImap" TEXT NOT NULL,
    "passEmail" TEXT NOT NULL,
    "cookie" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "xUserId" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "installationId" TEXT NOT NULL,
    "expiresIn" INTEGER NOT NULL,
    "isAccessMp" BOOLEAN NOT NULL DEFAULT false,
    "isAccessCookie" BOOLEAN NOT NULL DEFAULT false,
    "isOnlyAccessOrder" BOOLEAN NOT NULL DEFAULT false,
    "bonusCount" TEXT NOT NULL,
    "isUpdateBonus" BOOLEAN NOT NULL DEFAULT false,
    "userOwnerId" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("accountId")
);

-- CreateTable
CREATE TABLE "CitySM" (
    "cityId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,

    CONSTRAINT "CitySM_pkey" PRIMARY KEY ("cityId")
);

-- CreateTable
CREATE TABLE "_CitySMToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_telegramId_key" ON "User"("telegramId");

-- CreateIndex
CREATE UNIQUE INDEX "_CitySMToUser_AB_unique" ON "_CitySMToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CitySMToUser_B_index" ON "_CitySMToUser"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userOwnerId_fkey" FOREIGN KEY ("userOwnerId") REFERENCES "User"("telegramId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CitySMToUser" ADD CONSTRAINT "_CitySMToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "CitySM"("cityId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CitySMToUser" ADD CONSTRAINT "_CitySMToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("telegramId") ON DELETE CASCADE ON UPDATE CASCADE;

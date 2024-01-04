-- CreateTable
CREATE TABLE "URL" (
    "id" TEXT NOT NULL,
    "fullURL" TEXT NOT NULL,
    "shortURL" TEXT NOT NULL,
    "counter" SERIAL NOT NULL,

    CONSTRAINT "URL_pkey" PRIMARY KEY ("id")
);

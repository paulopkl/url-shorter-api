import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';
import { PrismaService } from './prisma/prisma.service';
import { URLs } from './app.controller';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async shortenUrl(
    fullURL: string,
  ): Promise<{ fullURL: string; shortURL: string }> {
    const shortUrl = nanoid(7); // You can adjust the length of the short URL

    const data = {
      fullURL: fullURL,
      shortURL: shortUrl,
    };

    const alreadyExists = await this.prisma.uRL.findFirst({
      where: { fullURL: fullURL },
    });

    if (alreadyExists) {
      await this.prisma.uRL.updateMany({
        where: {
          fullURL,
        },
        data: {
          counter: alreadyExists.counter + 1,
        },
      });
    } else {
      await this.prisma.uRL.create({
        data,
      });
    }

    return data;
  }

  // getOriginalUrl(shortUrl: string): string | undefined {
  //   return this.urlMap.get(shortUrl);
  // }

  async getMostAccessedURLs(): Promise<URLs[]> {
    const mostAccessedURLs = await this.prisma.uRL.findMany({
      take: 100,
      orderBy: {
        counter: 'desc',
      },
      select: {
        fullURL: true,
        shortURL: true,
        counter: true,
      },
    });

    return mostAccessedURLs;
  }
}

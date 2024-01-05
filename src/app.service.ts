import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';
import { DatabaseService } from './database-module/database.service';
import { UrlService } from './url-module/url-module.service';

@Injectable()
export class AppService {
  constructor(
    private readonly database: DatabaseService,
    private readonly urlService: UrlService,
  ) {}

  async shortenUrl(
    originalURL: string,
  ): Promise<{ originalURL: string; shortURL: string }> {
    // The lowest length possible
    // You can adjust the length of the short URL
    const shortURL = nanoid(3);

    // CREATE if not exists, UPDATE counter + 1 if so
    const result = await this.database.uRL.upsert({
      where: {
        originalURL,
      },
      create: {
        originalURL,
        shortURL,
        counter: 1,
      },
      update: {
        counter: {
          increment: 1,
        },
      },
      select: {
        originalURL: true,
        shortURL: true,
      },
    });

    return result;
  }

  async returnFullURL(shortUrl: string): Promise<string> {
    const result = await this.database.uRL.findFirst({
      where: {
        shortURL: shortUrl,
      },
    });

    const { originalURL } = result;

    const fullURL = this.urlService.validateURL(originalURL);

    return fullURL;
  }

  async getMostAccessedURLs() {
    const mostAccessedURLs = await this.database.uRL.findMany({
      take: 100,
      orderBy: {
        counter: 'desc',
      },
      select: {
        originalURL: true,
        shortURL: true,
        counter: true,
      },
    });

    return mostAccessedURLs;
  }

  // private generateShortUrl(originalUrl: string): string {
  //   const hash = crypto.createHash('md5').update(originalUrl).digest('hex');

  //   return hash.slice(0, 6); // Adjust the length as needed
  // }
}

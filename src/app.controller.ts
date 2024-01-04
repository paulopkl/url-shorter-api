import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

export interface URLs {
  fullURL: string;
  shortURL: string;
  counter: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('shorten') // home page
  async shorten(@Body('fullURL') fullURL: string): Promise<{
    fullURL: string;
    shortURL: string;
  }> {
    const URLsResult = await this.appService.shortenUrl(fullURL);

    return URLsResult;
  }

  @Get('most-accessed-urls') // home page
  async mostAccessedURLS(): Promise<URLs[]> {
    const mostAccessed = await this.appService.getMostAccessedURLs();

    return mostAccessed;
  }

  // @Get(':shortenURL') // home page
  // shortenRedirectToFullRoute(@Param('shortenURL') shortenURL: string): {
  //   shortURL: string;
  // } {
  //   const shortURL = this.appService.shortenUrl(url);

  //   return { shortURL };
  // }
}

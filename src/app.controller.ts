import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { AppService } from './app.service';
import { originalURLDTO, shortURLDTO } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post() // home page
  async shorten(@Body('originalURL') originalURL: originalURLDTO): Promise<{
    originalURL: string;
    shortURL: string;
  }> {
    const URLsResult = await this.appService.shortenUrl(originalURL);

    return URLsResult;
  }

  @Get('most-accessed-urls') // home page
  async mostAccessedURLS() {
    const mostAccessed = await this.appService.getMostAccessedURLs();

    return mostAccessed;
  }

  // @HttpCode()
  @Get(':shortURL') // home page
  @Redirect() // Use the @Redirect decorator to handle redirection
  async shortURLRedirectToFullRoute(
    @Param('shortURL') shortURL: shortURLDTO,
  ): Promise<{ url: string }> {
    const shouldReturnFullURL = await this.appService.returnFullURL(shortURL);

    console.log(shouldReturnFullURL);

    if (!shouldReturnFullURL) {
      return { url: '/' }; // Redirect to home page if the short URL is not found
    }

    return { url: shouldReturnFullURL };
  }
}

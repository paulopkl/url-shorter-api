import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlService {
  // Should validate if URL is OK to be redirected
  validateURL(originalURL: string) {
    let fullURL = originalURL;

    if (originalURL.startsWith('www')) {
      fullURL = 'https://'.concat(originalURL);
    }

    return fullURL;
  }
}

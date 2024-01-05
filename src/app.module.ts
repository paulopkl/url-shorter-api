import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database-module/database.service';
import { DatabaseModule } from './database-module/database.module';
import { UrlService } from './url-module/url-module.service';

@Module({
  imports: [DatabaseModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService, UrlService],
})
export class AppModule {}

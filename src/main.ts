import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as https from 'https';
import * as http from 'http';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  await app.init();
  
  http.createServer(server).listen(3000);
}

async function bootstrapWhichWorks() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
// bootstrapWhichWorks();

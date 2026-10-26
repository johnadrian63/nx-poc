/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

import { AppModule } from './app/app.module';
import { createDocument } from "./app/swagger/document-generator";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = createDocument(app);

  console.log("environment", process.env.NODE_ENV);

  app.enableCors({
    origin: [
      "https://nx-my-app1.vercel.app"
    ]
  });

  if (process.env.NODE_ENV !== "production") {
    try {
      writeFileSync(
        resolve(process.cwd(), "openapi.json"),
        JSON.stringify(document, null, 2)
      );
    } catch (error) {
      console.log(error);
    }
  }

  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  // Set when Nx waits for this server to be ready
  if (process.env.NX_READY_SIGNAL_SOCKET) {
    try {
      // Function keeps TypeScript and bundlers from rewriting or bundling the import
      const load = new Function('s', 'return import(s)') as (
        s: string,
      ) => Promise<{ emitReadySignal(server: unknown): boolean }>;
      (await load('@nx/js/ready-signal')).emitReadySignal(app.getHttpServer());
    } catch {
      // @nx/js isn't installed
    }
  }
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();

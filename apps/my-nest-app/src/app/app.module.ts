import { Module } from '@nestjs/common';
import { RouterModule } from "@nestjs/core";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./features/user/user.module";
import { appRoutes } from "./app.routes";

@Module({
  imports: [
    UserModule,
    RouterModule.register(appRoutes)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

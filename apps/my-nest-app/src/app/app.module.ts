import { Module } from '@nestjs/common';
import { RouterModule } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./features/user/user.module";
import { appRoutes } from "./app.routes";

const connectionString = `${process.env.MONGODB_CONNECTION_STRING}`;

@Module({
   imports: [
      UserModule,
      MongooseModule.forRoot(connectionString, {
         onConnectionCreate: (connection) => {
            connection.on("connected", () => {
               console.log("connected successfully!");
            });

            connection.on("disconnected", () => {
               console.log("disconnected!");
            });

            connection.on("error", (e) => {
               console.log("connection error!", e);
            });

            return connection;
         }
      }),
      RouterModule.register(appRoutes)
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule { }

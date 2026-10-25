import { Routes } from "@nestjs/core";

import { UserModule } from "./features/user/user.module";

export const appRoutes: Routes = [
    {
        path: "user",
        module: UserModule
    }
];
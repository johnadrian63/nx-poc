import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "",
        loadComponent: () => import("./nx-welcome").then((c) => c.NxWelcome)
    },
    {
        path: "about",
        loadComponent: () => import("./about/about").then((c) => c.About)
    }
];

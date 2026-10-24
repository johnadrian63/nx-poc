import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "about",
        loadComponent: () => import("./about/about").then((c) => c.About)
    }
];

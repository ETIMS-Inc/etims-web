import {NgModule} from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";

const notFoundRoutes: Routes = [
    {path: "**", redirectTo: "/404"},
    {
        path: "404",
        loadChildren: () => import("./components/pages/not-found-page/not-found-page.module").then(m => m.NotFoundPageModule),
    },
];

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {
        path: "home",
        loadChildren: () => import("./components/pages/home-page/home-page.module").then(m => m.HomePageModule),
    },
    {
        path: "account",
        loadChildren: () => import("./components/pages/account-starter-page/account-starter-page.module").then(m => m.AccountStarterPageModule),
    },
    {
        path: "recover-password",
        loadChildren: () => import("./components/pages/recover-password-page/recover-password-page.module").then(m => m.RecoverPasswordPageModule),
    },
    {
        path: "courses",
        loadChildren: () => import("./components/pages/courses-list-page/courses-list-page.module").then(m => m.CoursesListPageModule),
    },
    {
        path: "icons",
        loadChildren: () => import("./components/pages/icons-page/icons-page.module").then(m => m.IconsPageModule),
    },
    {
        path: "settings",
        loadChildren: () => import("./components/pages/settings/settings.module").then(m => m.SettingsModule),
    },
// @ts-ignore
].concat(notFoundRoutes) as Routes;

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

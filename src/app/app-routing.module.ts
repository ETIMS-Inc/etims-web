import {NgModule} from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";

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
    {path: "**", redirectTo: "/404"},
    {
        path: "404",
        loadChildren: () => import("./components/pages/not-found-page/not-found-page.module").then(m => m.NotFoundPageModule),
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

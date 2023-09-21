import {NgModule} from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";
import {AuthMode} from "./components/pages/auth-page/auth-page.model";

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {
        path: "home",
        loadChildren: () => import("./components/pages/home-page/home-page.module").then(m => m.HomePageModule),
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
        path: "sign-in",
        loadComponent: () => import("./components/pages/auth-page/auth-page.component").then(m => m.AuthPageComponent),
        data: {
            mode: AuthMode.SIGN_IN,
        },
    },
    {
        path: "sign-up",
        loadComponent: () => import("./components/pages/auth-page/auth-page.component").then(m => m.AuthPageComponent),
        data: {
            mode: AuthMode.SIGN_UP,
        },
    },
    {
        path: "**",
        redirectTo: "/404",
    },
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

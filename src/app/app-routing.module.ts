import {NgModule} from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";
import {RoutePath} from "./models/app-routing.model";
import {AuthMode} from "./components/pages/auth-page/auth-page.model";

const notFoundRoutes: Routes = [
    {path: "**", redirectTo: RoutePath.NotFound},
    {
        path: RoutePath.NotFound,
        loadChildren: () => import("./components/pages/not-found-page/not-found-page.module").then(m => m.NotFoundPageModule),
    },
];

const routes: Routes = [
    {path: RoutePath.InitPage, redirectTo: RoutePath.Home, pathMatch: "full"},
    {
        path: RoutePath.Home,
        loadChildren: () => import("./components/pages/home-page/home-page.module").then(m => m.HomePageModule),
    },
    {
        path: RoutePath.RecoverPassword,
        loadChildren: () => import("./components/pages/recover-password-page/recover-password-page.module").then(m => m.RecoverPasswordPageModule),
    },
    {
        path: RoutePath.Courses,
        loadChildren: () => import("./components/pages/courses-list-page/courses-list-page.module").then(m => m.CoursesListPageModule),
    },
    {
        path: RoutePath.Icons,
        loadChildren: () => import("./components/pages/icons-page/icons-page.module").then(m => m.IconsPageModule),
    },
    {
        path: RoutePath.SignIn,
        loadComponent: () => import("./components/pages/auth-page/auth-page.component").then(m => m.AuthPageComponent),
        data: {
            mode: AuthMode.SIGN_IN,
        },
    },
    {
        path: RoutePath.SignUp,
        loadComponent: () => import("./components/pages/auth-page/auth-page.component").then(m => m.AuthPageComponent),
        data: {
            mode: AuthMode.SIGN_UP,
        },
    },
    {
        path: RoutePath.Settings,
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

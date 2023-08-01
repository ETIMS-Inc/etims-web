import {NgModule} from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";
import {AuthorizationGuard} from "./auth/auth.guard";
import {ProtectedComponent} from "./components/protected/protected.component";
import {UnauthorizedComponent} from "./components/unauthorized/unauthorized.component";

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
    {path: "**", redirectTo: "/404"},
    {
        path: "404",
        loadChildren: () => import("./components/pages/not-found-page/not-found-page.module").then(m => m.NotFoundPageModule),
    },
    {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [AuthorizationGuard],
    },
    { path: 'unauthorized', component: UnauthorizedComponent },
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

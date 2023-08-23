import {NgModule} from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
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
        path: "course-details",
        loadChildren: () => import("./components/pages/course-details-page/course-details-page.module").then(m => m.CourseDetailsPageModule),
    },
    {path: "**", redirectTo: "/404"},
    {
        path: "sign-in",
        loadChildren: () => import("./components/pages/login-page/login-page.module").then(m => m.LoginPageModule),

    },
    {
        path: "sign-up",
        loadChildren: () => import("./components/pages/register-page/register-page.module").then(m => m.RegisterPageModule),
    },
    {
        path: "**",
        redirectTo: "/404"
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

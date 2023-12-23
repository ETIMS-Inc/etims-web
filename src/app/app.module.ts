import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {I18NextModule} from "angular-i18next";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {CoreHeaderModule} from "./components/core-header/core-header.module";
import {CoreSidebarComponent} from "./components/core-sidebar/core-sidebar.component";
import {LandingHeaderModule} from "./components/landing-header/landing-header.module";
import {IconLazyHolderModule} from "./components/lib/icon/icon-lazy-holder/icon-lazy-holder.module";
import {RecoverPasswordPageModule} from "./components/pages/recover-password-page/recover-password-page.module";
import {I18N_PROVIDERS} from "./localization-config";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        I18NextModule.forRoot(),
        RecoverPasswordPageModule,
        LandingHeaderModule,
        CoreHeaderModule,
        IconLazyHolderModule,
        CoreSidebarComponent,
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        I18N_PROVIDERS,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}

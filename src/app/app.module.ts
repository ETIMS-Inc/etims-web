import {CommonModule} from "@angular/common";
import {
    HTTP_INTERCEPTORS,
    HttpClientModule,
} from "@angular/common/http";
import {
    NgModule,
} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {
    AuthModule,
    LogLevel,
} from "angular-auth-oidc-client";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {LoginPageModule} from './components/pages/login-page/login-page.module';
import {I18NextModule} from "angular-i18next";
import {ProtectedModule} from "./components/protected/protected.module";
import {UnauthorizedModule} from "./components/unauthorized/unauthorized.module";
import {I18N_PROVIDERS} from "./localization-config";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {AngularSvgIconModule} from "angular-svg-icon";
import {environment} from "../environments/environment";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {LandingHeaderModule} from "./components/landing-header/landing-header.module";
import {RecoverPasswordPageModule} from "./components/pages/recover-password-page/recover-password-page.module";
import {etsEffects} from "./store/effects";
import {RegisterPageModule} from "./components/pages/register-page/register-page.module";
import {etsReducers} from "./store/reducers";

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
        LoginPageModule,
        AngularSvgIconModule.forRoot(),
        AuthModule.forRoot({
            config: {
                authority: "http://192.168.0.104:8081/realms/etims",
                redirectUrl: window.location.origin,
                postLogoutRedirectUri: window.location.origin,
                clientId: "web-ui",
                scope: "openid",
                responseType: "code",
                silentRenew: true,
                useRefreshToken: true,
                logLevel: LogLevel.Debug,
                ngswBypass: false,
            },
        }),
        I18NextModule.forRoot(),
        StoreModule.forRoot(etsReducers, environment.production ? {} : {
            runtimeChecks: {
                strictActionImmutability: true,
                strictStateImmutability: true,
            },
        }),
        EffectsModule.forRoot(etsEffects),
        environment.production ? [] : StoreDevtoolsModule.instrument({
            logOnly: false,
        }),
        RecoverPasswordPageModule,
        RegisterPageModule,
        LandingHeaderModule,
        UnauthorizedModule,
        ProtectedModule,
    ],
    exports: [RouterModule],
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

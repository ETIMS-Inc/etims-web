import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AngularSvgIconModule} from "angular-svg-icon";
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LoginPageModule } from './login-page/login-page.module';
import {I18NextModule} from "angular-i18next";
import {I18N_PROVIDERS} from "./localization-config";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {I18NextModule} from "angular-i18next";
import {AngularSvgIconModule} from "angular-svg-icon";
import {environment} from "../environments/environment";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {LandingHeaderModule} from "./components/landing-header/landing-header.module";
import {I18N_PROVIDERS} from "./localization-config";
import {etsEffects} from "./store/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {CommonModule} from "@angular/common";
import {EtsHeaderModule} from "./ets-header/ets-header.module";
import {RecoverPasswordPageModule} from "./recover-password-page/recover-password-page.module";
import {RegisterPageModule} from "./register-page/register-page.module";

import {RecoverPasswordPageModule} from "./components/pages/recover-password-page/recover-password-page.module";
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
    ],
    exports: [RouterModule],
    providers: [I18N_PROVIDERS],
    bootstrap: [AppComponent],
})
export class AppModule {
}

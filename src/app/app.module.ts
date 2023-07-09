import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AngularSvgIconModule} from "angular-svg-icon";
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LoginPageModule } from './login-page/login-page.module';
import {I18NextModule} from "angular-i18next";
import {I18N_PROVIDERS} from "./localization-config";
import {StoreModule} from "@ngrx/store";
import {etsReducers} from "./store/reducers";
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {etsEffects} from "./store/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {CommonModule} from "@angular/common";
import {EtsHeaderModule} from "./ets-header/ets-header.module";
import {RecoverPasswordPageModule} from "./recover-password-page/recover-password-page.module";
import {RegisterPageModule} from "./register-page/register-page.module";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
        SharedModule,
        LoginPageModule,
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
        EtsHeaderModule,
        RecoverPasswordPageModule,
        RegisterPageModule,
    ],
    providers: [I18N_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule {
}

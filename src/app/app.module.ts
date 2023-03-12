import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from './header/header.component';
import {MatIconModule} from "@angular/material/icon";
import {AngularSvgIconModule} from "angular-svg-icon";
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AccountStarterPageModule } from './account-starter-page/account-starter-page/account-starter-page.module';
import {I18NextModule} from "angular-i18next";
import {I18N_PROVIDERS} from "./localization-config";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
        SharedModule,
        AccountStarterPageModule,
        I18NextModule.forRoot()
    ],
    providers: [I18N_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule {
}

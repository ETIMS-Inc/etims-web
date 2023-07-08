import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AngularSvgIconModule} from "angular-svg-icon";
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {AccountStarterPageModule} from './components/account-starter-page/account-starter-page.module';
import {I18NextModule} from "angular-i18next";
import {I18N_PROVIDERS} from "./localization-config";
import {StoreModule} from "@ngrx/store";
import {etsReducers} from "./store/reducers";
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {etsEffects} from "./store/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {CommonModule} from "@angular/common";
import {LandingHeaderModule} from "./components/landing-header/landing-header.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    // { path: 'home', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
//     { path: 'second-component', component: SecondComponent },
    { path: '**', redirectTo: '/404' },
    { path: '404', loadChildren: () => import('src/app/components/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule) },
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
        SharedModule,
        AccountStarterPageModule,
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
        LandingHeaderModule,
    ],
    providers: [I18N_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule {
}

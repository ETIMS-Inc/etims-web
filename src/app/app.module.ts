import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {I18NextModule} from "angular-i18next";
import {environment} from "../environments/environment";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {CoreHeaderModule} from "./components/core-header/core-header.module";
import {LandingHeaderModule} from "./components/landing-header/landing-header.module";
import {IconLazyHolderModule} from "./components/lib/icon/icon-lazy-holder/icon-lazy-holder.module";
import {RecoverPasswordPageModule} from "./components/pages/recover-password-page/recover-password-page.module";
import {I18N_PROVIDERS} from "./localization-config";
import {etsEffects} from "./store/effects";
import {etsReducers} from "./store/reducers";
import { CoreSidebarComponent } from './components/core-sidebar/core-sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        CoreSidebarComponent,
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
        LandingHeaderModule,
        CoreHeaderModule,
        IconLazyHolderModule,
    ],
    exports: [
        RouterModule,
    ],
    providers: [I18N_PROVIDERS],
    bootstrap: [AppComponent],
})
export class AppModule {
}

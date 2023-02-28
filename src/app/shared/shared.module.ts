import { NgModule } from '@angular/core';
import { AccountCardComponent } from './account-card/account-card.component';

@NgModule({
    declarations: [
        AccountCardComponent,
    ],
    exports: [
        AccountCardComponent,
    ],
})
export class SharedModule {
}

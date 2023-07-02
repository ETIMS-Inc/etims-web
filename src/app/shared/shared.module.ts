import { NgModule } from '@angular/core';
import { EtsCardComponent } from './ets-card/ets-card.component';

@NgModule({
    declarations: [
        EtsCardComponent,
    ],
    exports: [
        EtsCardComponent,
    ],
})
export class SharedModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LibModule} from "../../lib/lib.module";

import { IconsPageRoutingModule } from './icons-page-routing.module';
import { IconsPageComponent } from './icons-page.component';


@NgModule({
  declarations: [
    IconsPageComponent
  ],
    imports: [
        CommonModule,
        IconsPageRoutingModule,
        LibModule,
    ],
})
export class IconsPageModule { }

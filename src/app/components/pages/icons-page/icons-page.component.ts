import { Component } from '@angular/core';
import {EtsIconMode} from "../../lib/icon/icon.model";
import {
    etsColoredIconList,
    etsSimpleIconList,
    etsStrokeIconList,
} from "../../lib/icon/icons.list";

@Component({
  selector: 'ets-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.less']
})
export class IconsPageComponent {
    public defaultIcons = etsSimpleIconList;
    public coloredIcons = etsColoredIconList;
    public strokeIcons = etsStrokeIconList;
    public iconMode = EtsIconMode;
}

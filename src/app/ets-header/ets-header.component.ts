import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MenuItem} from "primeng/api";
import {HeaderMenuItemType, primaryNavTabsList, secondaryNavTabsList} from "./ets-header.model";

@Component({
    selector: 'ets-header',
    templateUrl: './ets-header.component.html',
    styleUrls: ['./ets-header.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EtsHeaderComponent {

    public primaryNavTabs: MenuItem[] = primaryNavTabsList;
    public secondaryNavTabs: HeaderMenuItemType[] = secondaryNavTabsList;

    toggleDarkTheme(): void {
        document.body.classList.toggle('dark-theme');
    }

}

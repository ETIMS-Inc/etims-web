import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from "@angular/core";
import {MenuItem} from "primeng/api";
import {
    MenuItemType,
    navTabsList,
} from "./core-header.model";

@Component({
    selector: "ets-core-header",
    templateUrl: "./core-header.component.html",
    styleUrls: ["./core-header.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreHeaderComponent implements OnInit {

    public tabsList: MenuItemType[] = navTabsList;

    public ngOnInit(): void {
        this.listenForBadgesChange();
    }

    private listenForBadgesChange(): void {
        this.tabsList = this.tabsList.map((tab: MenuItemType) => ({...tab, amount: 3, caption: "Thomas Shelby"}));
        console.log(this.tabsList);
    }

    public items: MenuItem[] | undefined = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'Angular',
                    icon: 'pi pi-external-link',
                    url: 'http://angular.io'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    routerLink: '/fileupload'
                }
            ]
        }
    ];

}

import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {
    NavigationEnd,
    Router,
} from "@angular/router";
import {
    filter,
    map,
    Observable,
    startWith,
} from "rxjs";
import {CardComponent} from "../card/card.component";
import {NavItemComponent} from "../nav-item/nav-item.component";
import {
    NavItem,
    NavItemDisplayMode,
} from "../nav-item/nav-item.model";

@Component({
    selector: "ets-nav-menu",
    standalone: true,
    imports: [
        CommonModule,
        NavItemComponent,
        CardComponent,
    ],
    templateUrl: "./nav-menu.component.html",
    styleUrls: ["./nav-menu.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
    @Input() public items: NavItem[];
    public currentUrl: Observable<string>;
    public navItemDisplayMode = NavItemDisplayMode;

    constructor(private router: Router) {
        this.currentUrl = router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(event => (event as NavigationEnd).urlAfterRedirects),
            startWith(router.url),
        );

        this.currentUrl.subscribe(val => console.log(">>> NAV: ", val));
        // cdr.detectChanges();
    }

    public itemClicked(item: NavItem): void {
        this.router.navigateByUrl(item.url);
    }
}

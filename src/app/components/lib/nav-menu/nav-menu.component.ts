import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from "@angular/core";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
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
export class NavMenuComponent implements OnInit {
    @Input({required: true}) public items: NavItem[];
    @Output() public navChanged: EventEmitter<NavItem> = new EventEmitter();
    public currentUrl: Observable<string>;
    public navItemDisplayMode = NavItemDisplayMode;

    constructor(private router: Router) {
        let emitted = false;
        this.currentUrl = router.events.pipe(
            takeUntilDestroyed(),
            filter(event => event instanceof NavigationEnd),
            map(event => (event as NavigationEnd).urlAfterRedirects),
            startWith(router.url),
            map(url => {
                let processedUrl = this.items[0]?.url;
                const existItem = this.items.find(item => item.url === url);

                if (existItem) {
                    processedUrl = url;
                    !emitted && this.navChanged.emit(existItem);
                } else {
                    this.router.navigateByUrl(processedUrl);
                    this.navChanged.emit(this.items[0]);
                }
                emitted = true;
                return processedUrl;
            }),
        );
    }

    public ngOnInit(): void {
        // this.navChanged.emit(this.items[0]);
    }

    public itemClicked(item: NavItem): void {
        this.router.navigateByUrl(item.url);
        this.navChanged.emit(item);
    }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {SvgIconRegistryService} from "angular-svg-icon";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {

    constructor(private iconReg: SvgIconRegistryService) {
    }

    public title = 'etims-landing-ui';
    private iconRegSubscription: Subscription | undefined = new Subscription();

    public ngOnInit(): void {
        this.iconRegSubscription = this.iconReg.loadSvg("assets/icons/logo.svg", "logo")?.subscribe();
    }

    public ngOnDestroy(): void {
        this.iconRegSubscription?.unsubscribe();
    }
}

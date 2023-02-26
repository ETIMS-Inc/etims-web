import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ets-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

    public readonly navigationTabs: string[] = [
        "Home", "Features", "Plans", "Documentation",
    ];

    ngOnInit(): void {
    }

}

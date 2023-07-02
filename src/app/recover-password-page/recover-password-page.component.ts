import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {passwordCardSizes, RecoverPasswordCard, RecoverPasswordType} from "./recover-password-page.model";

@Component({
    selector: 'ets-recover-password-page',
    templateUrl: './recover-password-page.component.html',
    styleUrls: ['./recover-password-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverPasswordPageComponent implements OnInit {

    @Input()
    public email: string = "your_mail_box@gmail.com";

    @Input()
    public recoverTypeState: RecoverPasswordType = "successAction"; // TODO remove hardcoded value when logic will be added

    public cardSize: RecoverPasswordCard;

    public ngOnInit(): void {
        this.listenForTypeState();
    }

    private listenForTypeState = (): void => {
        switch (this.recoverTypeState) {
            case "email":
                this.cardSize = passwordCardSizes['medium'];
                break;
            case "password":
                this.cardSize = passwordCardSizes['medium'];
                break;
            case "successAction":
                this.cardSize = passwordCardSizes['small'];
                break;
        }
    }

}

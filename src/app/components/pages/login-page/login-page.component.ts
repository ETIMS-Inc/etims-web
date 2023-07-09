import {ChangeDetectionStrategy, Component} from '@angular/core';
import {mediaBtnList, MediaButton, MediaButtonType} from "./login-page.model";

@Component({
    selector: 'ets-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {

    public mediaButtons: MediaButton[] = mediaBtnList;

    public handleMediaChange(type: MediaButtonType) {
        switch (type) {
            case "google":
            case "twitter":
            case "facebook":
                break;
            default:
                const errorType: unknown = type;
                console.warn("unknown type: ", errorType);
        }
    }
}

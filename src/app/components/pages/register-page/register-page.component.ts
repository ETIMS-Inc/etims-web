import {ChangeDetectionStrategy, Component} from '@angular/core';
import {mediaBtnList, MediaButton, MediaButtonType} from "../login-page/login-page.model";

@Component({
    selector: 'ets-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {

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

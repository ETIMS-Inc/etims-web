import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RecoverPassword} from "./recover-password-page.model";

@Component({
    selector: 'ets-recover-password-page',
    templateUrl: './recover-password-page.component.html',
    styleUrls: ['./recover-password-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverPasswordPageComponent {
    @Input()
    public email: string = "your_mail_box@gmail.com";
    @Input()
    public recoverTypeState: RecoverPassword;
    public recoverType = RecoverPassword;
}

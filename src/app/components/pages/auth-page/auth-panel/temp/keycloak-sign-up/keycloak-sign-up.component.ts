import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ets-keycloak-sign-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keycloak-sign-up.component.html',
  styleUrls: ['./keycloak-sign-up.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeycloakSignUpComponent {

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ets-keycloak-sign-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keycloak-sign-in.component.html',
  styleUrls: ['./keycloak-sign-in.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeycloakSignInComponent {

}

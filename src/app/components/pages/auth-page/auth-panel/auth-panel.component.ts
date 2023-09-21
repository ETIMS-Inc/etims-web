import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ets-auth-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPanelComponent {

}

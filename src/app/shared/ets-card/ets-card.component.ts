import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ets-card',
  templateUrl: './ets-card.component.html',
  styleUrls: ['./ets-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EtsCardComponent {

    @Input()
    public width: number;

    @Input()
    public height: number;


}

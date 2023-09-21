import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from "@angular/core";
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {InfoPanelModel} from "./info-panel.model";

@Component({
  selector: 'ets-info-panel',
  standalone: true,
    imports: [CommonModule, ButtonModule],
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoPanelComponent {
    @Input() public model: InfoPanelModel = {
        title: "Welcome to",
        secondTitle: "ETIMS CLOUD",
        description: "The system is intended to control learning process. Register right now",
        buttonLabel: "Sign Up",
    };
    @Output() public click = new EventEmitter<void>();
}

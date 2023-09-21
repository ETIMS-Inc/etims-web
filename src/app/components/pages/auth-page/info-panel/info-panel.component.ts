import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from "@angular/core";
import {I18NextModule} from "angular-i18next";
import {ButtonModule} from "primeng/button";
import {InfoPanelModel} from "./info-panel.model";

@Component({
    selector: "ets-info-panel",
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        I18NextModule,
    ],
    templateUrl: "./info-panel.component.html",
    styleUrls: ["./info-panel.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPanelComponent {
    @Input() public model: InfoPanelModel;
    @Output() public buttonClick = new EventEmitter<void>();
}

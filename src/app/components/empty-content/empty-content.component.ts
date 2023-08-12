import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";

export enum EmptyImage {
    AMIGOS_CHILLING_1 = "amigos-chilling.png",
    AMIGOS_CHILLING_2 = "amigo-chilling2.jpg",
}

@Component({
    selector: "ets-empty-content",
    templateUrl: "./empty-content.component.html",
    styleUrls: ["./empty-content.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyContentComponent {
    @Input() public title: string;
    @Input() public message: string;
    @Input() public image: EmptyImage = EmptyImage.AMIGOS_CHILLING_1;
}

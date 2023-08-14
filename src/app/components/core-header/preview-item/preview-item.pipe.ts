import {
    Pipe,
    PipeTransform,
} from "@angular/core";
import {UserStatusType} from "./preview-item.model";

type BadgeSeverityType = "success" | "info" | "warning" | "danger";

@Pipe({name: "previewStatus"})
export class PreviewItemPipe implements PipeTransform {

    public transform(status: UserStatusType): BadgeSeverityType {
        switch (status) {
            case "active":
                return "success";
            case "away":
                return "warning";
            case "busy":
                return "danger";
        }
    }
}

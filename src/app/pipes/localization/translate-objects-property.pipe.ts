import {
    Pipe,
    PipeTransform,
} from "@angular/core";
import {I18Service} from "../../services/i18.service";

@Pipe({
    name: "translateObjectsProperty",
    pure: true,
    standalone: true,
})
export class EtsTranslateObjectsPropertyPipe implements PipeTransform {

    constructor(private localizationService: I18Service) {
    }

    public transform<T extends object, K extends keyof T>(objects: T[], propertyKey: K): T[] {
        return this.localizationService.translateObjectsProperty(objects, propertyKey);
    }
}

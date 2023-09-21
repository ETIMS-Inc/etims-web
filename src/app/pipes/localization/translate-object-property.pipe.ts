import {
    Pipe,
    PipeTransform,
} from "@angular/core";
import {I18Service} from "../../services/i18.service";

@Pipe({
    name: "translateObjectProperty",
    pure: true,
    standalone: true,
})
export class EtsTranslateObjectPropertyPipe implements PipeTransform {

    constructor(private localizationService: I18Service) {
    }

    public transform<T extends object, K extends keyof T>(object: T, propertyKey: K): T {
        return this.localizationService.translateObjectProperty(object, propertyKey);
    }
}

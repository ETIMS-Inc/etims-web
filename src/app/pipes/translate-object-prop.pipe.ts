import {
    Pipe,
    PipeTransform,
} from "@angular/core";
import {I18NextService} from "angular-i18next";

@Pipe({
    name: "translateObjectProp",
})
export class TranslateObjectPropPipe implements PipeTransform {


    constructor(private i18NextService: I18NextService) {
    }

    transform(value: any, propertyKey: string): any {
        if (typeof value !== "object") {
            return value;
        }
        if (Array.isArray(value)) {
            return value.map(item => this.translateProperty(item, propertyKey));
        }
        return this.translateProperty(value, propertyKey);
    }

    private translateProperty(obj: any, propertyKey: string): any {
        if (obj.hasOwnProperty(propertyKey)) {
            const translatedValue = this.i18NextService.t(obj[propertyKey]);
            return {...obj, [propertyKey]: translatedValue};
        }
        return obj;
    }

}

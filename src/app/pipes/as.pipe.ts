import {
    Pipe,
    PipeTransform,
} from "@angular/core";

@Pipe({name: "as", pure: true, standalone: true})
export class EtsAsPipe implements PipeTransform {
    transform<T>(input: any, baseItem: T | undefined): T {
        return input as unknown as T;
    }
}

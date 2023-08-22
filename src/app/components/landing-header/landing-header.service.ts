import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class LandingHeaderService {

    constructor(private router: Router) {
    }

    public toggleTheme(): void {
        document.body.classList.toggle("dark-theme");
    }

    public startAction(): void {
        this.router.navigateByUrl('sign-in');
    }
}

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LandingHeaderService {

    public toggleTheme(): void {
        document.body.classList.toggle('dark-theme');
    }

    public startAction(): void {}

}

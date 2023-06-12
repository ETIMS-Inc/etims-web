import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AuthState} from "../models/auth.state";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthStoreService {

    constructor(private store: Store<AuthState>) {
    }

    // public getTokens(): Observable<string> {
    //     return this.store.
    // }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import {DataService} from "../../auth/data.service";
import {
    getData,
    getDataSuccess,
    getDataFailure,
} from '../actions/data.actions';

@Injectable()
export class DataEffects {

    constructor(
        private actions$: Actions,
        private dataService: DataService,
    ) {}

    public getData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getData),
            switchMap(() =>
                this.dataService
                    .getData()
                    .pipe(map((data) => getDataSuccess({ data })))
            )
        )
    );
}

import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from "@angular/core";
import {
    select,
    Store,
} from "@ngrx/store";
import {Observable} from "rxjs";
import {getData} from "../../store/actions/data.actions";
import {selectUserInfo} from "../../store/selectors/auth.selectors";
import {selectData} from "../../store/selectors/data.selectors";

@Component({
    selector: 'ets-protected',
    templateUrl: './protected.component.html',
    styleUrls: ['./protected.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProtectedComponent implements OnInit {

    secretData$: Observable<any>;
    userData$: Observable<any>;

    constructor(private store: Store<any>) {}

    ngOnInit(): void {
        this.userData$ = this.store.pipe(select(selectUserInfo));
        this.secretData$ = this.store.pipe(select(selectData));
        this.store.dispatch(getData());
    }

}

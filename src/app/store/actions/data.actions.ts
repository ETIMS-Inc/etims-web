import { createAction, props } from "@ngrx/store";

const enum Action {
    GetData = "[Data] Get data",
    GetDataSuccess = "[Data] Get data success",
    GetDataFailure = "[Data] Get data failure",
}

export const getData = createAction(
    Action.GetData,
);

export const getDataSuccess = createAction(
    Action.GetDataSuccess,
    props<{ data: any }>(),
);

export const getDataFailure = createAction(
    Action.GetDataFailure,
);

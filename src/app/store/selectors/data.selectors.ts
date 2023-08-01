import {createSelector} from "@ngrx/store";
import {DataState} from "../models/data.state";
import {EtsState} from "../state";

export const getDataState = (state: EtsState) => state?.dataState;

export const selectData = createSelector(
    getDataState,
    (state: DataState) => state?.data,
);

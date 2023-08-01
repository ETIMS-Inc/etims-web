import {AuthState} from "./models/auth.state";
import {DataState} from "./models/data.state";

/**
 * Use alphabetical order for reducers
 */
export interface EtsState {
    authState?: AuthState;
    dataState?: DataState;
}

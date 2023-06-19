import {AuthState} from "./models/auth.state";

/**
 * Use alphabetical order for reducers
 */
export interface EtsState {
    authState?: AuthState;
}

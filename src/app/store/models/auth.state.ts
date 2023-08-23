export interface AuthState {
    profile: any;
    isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
    isLoggedIn: false,
    profile: null,
};

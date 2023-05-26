import { LoadingState } from "./loading/loadingState";
import { loginState } from "./login/LoginState";

 export interface AppState{
    loading: LoadingState;
    login: loginState
 }
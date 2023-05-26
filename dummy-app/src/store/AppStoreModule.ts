import { StoreModule } from "@ngrx/store"
import { lodaingReducer } from "./loading/loading.reducers";
import { loginReducer } from "./login/login.reducers";

export const AppStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature("loading", lodaingReducer),
    StoreModule.forFeature("login",loginReducer)

]
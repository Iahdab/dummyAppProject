import { StoreModule } from "@ngrx/store"
import { lodaingReducer } from "./loading/loading.reducers";

export const AppStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature("loading", lodaingReducer)

]
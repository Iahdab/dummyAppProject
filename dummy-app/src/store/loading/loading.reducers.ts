import {createReducer, on } from "@ngrx/store"
import { hide, show } from "./loading.actions";
import { LoadingState } from "./loadingState";

const initialState: LoadingState={show:false};

const reducer = createReducer(initialState, 
    on(show,()=>{
        return {show: true};
    }),
    on(hide,()=>{
        return {show: true};
    }))


    export function lodaingReducer(state:LoadingState, action){
        return reducer(state,action)
    }
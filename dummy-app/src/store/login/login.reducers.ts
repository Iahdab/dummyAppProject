
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./Login.actoins";
import { loginState } from "./LoginState";
import { createReducer, on } from "@ngrx/store";
import { AppInitialState } from "../AppInitialState";

const initialState: loginState = AppInitialState.login;

const reducer = createReducer(initialState,
    on(recoverPassword,currentState =>{
        return {
           ...currentState,
           error:null,
           isRecoveredPassword: false,
           isRecoveringPassword: true

        };
    }),
    on(recoverPasswordSuccess,currentState=>{
        return{
            ... currentState,
            error:null,
            isRecoveredPassword: true,
            isRecoveringPassword: false
 
        } 
    }),
    on(recoverPasswordFail,(currentState, action)=>{
        return{
            ... currentState,
            error:action.error,
            isRecoveredPassword: false,
            isRecoveringPassword: false
 
        } 
    }),
)

export function loginReducer(state: loginState,action){
 return reducer(state, action)   
}
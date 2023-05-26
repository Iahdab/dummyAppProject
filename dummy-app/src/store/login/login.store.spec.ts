import { AppInitialState } from "../AppInitialState";
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./Login.actoins";
import { loginReducer } from "./login.reducers";
import { loginState } from "./LoginState";

describe("Login store",()=> {

 it("recoverPassword",()=>{
    const initialState: loginState = AppInitialState.login;
    const newState = loginReducer(initialState, recoverPassword());
    expect(newState).toEqual({
        ...initialState,
        error:null,
        isRecoveredPassword: false,
        isRecoveringPassword: true
    })
 })

 it("recoverPasswordSuccess",()=>{
    const initialState: loginState =  AppInitialState.login;
    const newState = loginReducer(initialState, recoverPasswordSuccess());
    expect(newState).toEqual({
        ...initialState,
        error:null,
        isRecoveredPassword: true,
        isRecoveringPassword:false
    })
 })

 it("recoverPasswordFail",()=>{
    const initialState: loginState = AppInitialState.login;
    const error = {error:'error'};
    const newState = loginReducer(initialState, recoverPasswordFail(error));
    expect(newState).toEqual({
        ...initialState,
        error,
        isRecoveredPassword: false,
        isRecoveringPassword:false
    })
 })

})
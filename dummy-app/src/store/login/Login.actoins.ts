import { createAction, props } from "@ngrx/store";

export const recoverPassword = createAction("[Recover Password]");
export const recoverPasswordSuccess = createAction ("[Recover Password] Success");
export const recoverPasswordFail= createAction("[Recover Password] Fail",props<{error:any}>())
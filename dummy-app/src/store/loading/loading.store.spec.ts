import { lodaingReducer } from "./loading.reducers";
import { LoadingState } from "./loadingState";
import {hide,show } from "./loading.actions";
import { createAction } from "@ngrx/store";



describe ('loading store', ()=> {
    it('show', ()=> {
        const initialState: LoadingState = {show: false};
        const newState= lodaingReducer(initialState, show());

        expect(newState).toEqual({show: true})
    })


    it('hide', ()=> {
        const initialState: LoadingState = {show: true};
        const newState= lodaingReducer(initialState, hide());
        expect(newState).toEqual({show: false})
    })

    it('shoild keep state if action is unknown ', ()=> {
        const initialState: LoadingState = {show: true};
        const action = createAction("UNKNOWN")
        const newState= lodaingReducer(initialState,action);
        expect(newState).toEqual({show: true})
    })
})
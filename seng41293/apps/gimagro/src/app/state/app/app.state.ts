import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ChangeEmail, ShowLoading } from "./app.actions";

export interface AppStateModel{
    loading: boolean;
    email: string;
    token?: string;
}

@State<AppStateModel>({
    name: 'app',
    defaults: { loading: false, email: 'gimhanif44@gmail.com'},
})
@Injectable({ providedIn: 'root' })
export class AppState {
    //change is emitted to the state
    @Selector() static loading(state: AppStateModel) {
        return state.loading;
    }

    @Selector() static email(state: AppStateModel) {
        return state.email;
    }

    //change is done to the state
    @Action(ShowLoading)
    showLoading( 
        { patchState }: StateContext<AppStateModel>, 
        { loading }: ShowLoading
    ) {
        return patchState({ loading });
    }

    @Action(ChangeEmail)
    changeEmail( 
        { patchState }: StateContext<AppStateModel>, 
        { email }: ChangeEmail
    ) {
        return patchState({ email });
    }
}
import { AuthInitialState, InitialStateItems } from '@interfaces/models';
import { ActionReducerMap } from '@ngrx/store';
import { ItemsReducer } from './reducers/items.reducer';
import { AuthReducer } from './reducers/auth.reducer';

export interface AppState {
  items: InitialStateItems;
  auth: AuthInitialState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  items: ItemsReducer,
  auth: AuthReducer
};

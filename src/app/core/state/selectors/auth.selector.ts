import { createSelector } from '@ngrx/store';
import { AppState } from '../app.store';
import { state } from '@angular/animations';
import { AuthInitialState } from '../../interfaces/models';

export const TokenAuthFeature = (state: AppState) => state.auth;

export const isAuthenticated = createSelector(
  TokenAuthFeature,
  (state: AuthInitialState) => state.tokenString != ''
);

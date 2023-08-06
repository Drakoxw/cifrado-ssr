import { createAction, props } from '@ngrx/store';
import { ACTION_TOKEN } from '../../constants';

export const createToken = createAction(
  ACTION_TOKEN.CREATED,
  props<{ tokenString: string }>()
);

import { AuthInitialState } from '@interfaces/models'
import { createReducer, on } from '@ngrx/store'
import { createToken } from '../actions/auth.action'

const InitialState: AuthInitialState = {
  tokenString: ''
}

export const AuthReducer = createReducer(
  InitialState,
  on(createToken, (state, { tokenString }) => {
    return {...state, tokenString }
  })
)

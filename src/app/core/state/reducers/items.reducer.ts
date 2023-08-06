import { createReducer, on } from '@ngrx/store'
import { InitialStateItems } from '@interfaces/models'
import { loadItem, loadedItems } from '@state/actions/items.action'

const initialState: InitialStateItems = {
  loading: false,
  itemsList: []
}

export const ItemsReducer = createReducer(
  initialState,
  on(loadItem, (state) => {
    return {...state, loading: true}
  }),
  on(loadedItems, (state, { itemsList }) => {
    return {...state, loading: false, itemsList }
  })
)

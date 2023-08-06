import { createSelector } from '@ngrx/store'
import { InitialStateItems } from '@interfaces/models'
import { AppState } from '@state/app.store'

export const selectItemsFeature = (state: AppState) => state.items

export const selectListItems = createSelector(
  selectItemsFeature,
  (state: InitialStateItems) => state.itemsList
)

export const selectLoadingItems = createSelector(
  selectItemsFeature,
  (state: InitialStateItems) => state.itemsList.length > 0 ? false : state.loading
)

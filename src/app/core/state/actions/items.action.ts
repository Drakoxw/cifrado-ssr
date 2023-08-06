import { props, createAction } from '@ngrx/store'
import { ItemsModel } from '@interfaces/models'
import { ACTION_ITEMS } from '@constants/storeItems'

export const loadItem = createAction(
	ACTION_ITEMS.LOAD,
)

export const loadedItems = createAction(
	ACTION_ITEMS.LOADED,
	props<{ itemsList: ItemsModel[] }>()
)
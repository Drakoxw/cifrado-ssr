import { Injectable, inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs'
import { map, exhaustMap, catchError } from 'rxjs/operators'

import { ItemsService } from '@services/items.service'
import { ACTION_ITEMS } from '@constants/index'

@Injectable()
export class ItemsEffects {

	private actions$ = inject(Actions)
	private itemsServ = inject(ItemsService)

	loadItems$ = createEffect(() => this.actions$.pipe(
		ofType(ACTION_ITEMS.LOAD),
		exhaustMap(() => this.itemsServ.getListItems()
			.pipe(
				map(itemsList => ({ type: ACTION_ITEMS.LOADED, itemsList })),
				catchError(() => EMPTY)
			))
	))

}
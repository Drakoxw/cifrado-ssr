import { Injectable } from '@angular/core';
import { ItemsModel } from '@interfaces/models';
import { listItemsMock } from '@mocks/index';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  getListItems(): Observable<ItemsModel[]> {
    return of(listItemsMock).pipe(delay(1500));
  }
}

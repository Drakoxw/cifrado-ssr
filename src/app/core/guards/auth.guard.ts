import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LocalstorageService } from '@services/localstorage.service';
import { PATHS_FULL_CLIENT } from '@constants/index';

export const authGuard: CanActivateFn = (route, state) => {
  try {
    const LocalStorage = inject(LocalstorageService)
    const router: Router = inject(Router);
    if (LocalStorage.getToken() == '') {
      router.navigate([PATHS_FULL_CLIENT.login]);
      return false
    }
    return true

  } catch (error) {
    return false
  }
};

import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LocalstorageService } from '@services/localstorage.service';
import { PATHS_FULL_CLIENT } from '@constants/index';

export const authGuard: CanActivateFn = () => {
  try {
    const LocalStorage = inject(LocalstorageService)
    const router: Router = inject(Router);

    const token = LocalStorage.getToken();

    if (!token) {
      router.navigate([PATHS_FULL_CLIENT.login]);
      return false
    }
    return true

  } catch (error) {
    return false
  }
};

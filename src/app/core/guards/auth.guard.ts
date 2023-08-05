import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  try {
    console.log(route, state);

    const token = localStorage.getItem('token');
    return token ? true : false;
  } catch (error) {
    return false
  }
};

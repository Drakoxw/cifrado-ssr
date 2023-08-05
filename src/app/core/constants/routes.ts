import { RoutesClient } from '@interfaces/models';

export const MODULES = {
  PUBLIC: '',
  USER: 'user',
};

// RUTAS DEL CLIENTE EN MODULO
export const PATHS_MODULE_CLIENT: RoutesClient = {
  root: '',
  home: 'inicio',
  aboutUs: 'quienes-somos',
  contactUs: 'contactanos',
  login: 'login',
  listClients: 'list-clients'
};

// RUTAS COMPLETAS PARA EL ROUTE LINK
export const PATHS_FULL_CLIENT: RoutesClient = {
  root: '',
  home: `${MODULES.PUBLIC}/${PATHS_MODULE_CLIENT.home}`,
  aboutUs: `${MODULES.PUBLIC}/${PATHS_MODULE_CLIENT.aboutUs}`,
  contactUs: `${MODULES.PUBLIC}/${PATHS_MODULE_CLIENT.contactUs}`,
  login: `${MODULES.USER}/${PATHS_MODULE_CLIENT.login}`,
  listClients: `${MODULES.USER}/${PATHS_MODULE_CLIENT.listClients}`,
};

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MODULES } from '@constants/index';

// const routes: Routes = [];

const routes: Routes = [
  {
    path: MODULES.PUBLIC,
    loadChildren: () =>
      import('@modulePublic/public.module').then((m) => m.PublicModule),
  },
  {
    path: MODULES.USER,
    loadChildren: () =>
      import('@moduleClient/client.module').then((m) => m.ClientModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      // useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

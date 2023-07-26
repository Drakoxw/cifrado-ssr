import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@modulePublic/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'client',
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

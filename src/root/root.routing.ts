import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlertsComponent } from './alerts/alerts.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/start/start.module').then((m) => m.StartModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../app/login/login.module').then((m) => m.LoginModule),
  },
  { path: '**', component: NotFoundComponent },
];

export const rc = [NotFoundComponent, AlertsComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

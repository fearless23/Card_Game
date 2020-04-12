import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'; // For ngif, pipes ,directivses
// Components
import { AuthGuard } from '../services/auth.guard';
import { StartComponent } from './start.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from '../home/home.component';

// Routes
const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      // {
      //   path: 'projects', loadChildren: './projects/projects.module#ProjectsModule',
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: 'project/:id', loadChildren: './project/project.module#ProjectModule',
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: 'settings', loadChildren: './settings/settings.module#SettingsModule',
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: 'add-stuff', loadChildren: './add-stuff/add-stuff.module#AddStuffModule',
      //   canActivate: [AuthGuard]
      // }
      // {
      //   path: 'profile', loadChildren: './profile/profile.module#ProfileModule',
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: '', loadChildren: './home/home.module#HomeModule',
      //   canActivate: [AuthGuard]
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class StartRoutingModule {}

export const rc = [StartComponent, HeaderComponent, HomeComponent];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AuthGuard } from '../services/auth.guard';
import { StartComponent } from './start.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from '../home/home.component';
import { GamesComponent } from '../games/games.component';
import { NewGameComponent } from '../new-game/new-game.component';
import { GameComponent } from '../game/game.component';
import { GamePhaserComponent } from '../gamePhaser/game.component';

export const rc = [
  StartComponent,
  HeaderComponent,
  HomeComponent,
  GamesComponent,
  NewGameComponent,
  GameComponent,
  GamePhaserComponent,
];
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
      {
        path: 'games',
        component: GamesComponent,
      },
      {
        path: 'games/new',
        component: NewGameComponent,
      },
      {
        path: 'game/:id',
        component: GameComponent,
      },
      {
        path: 'game/:id/play',
        component: GamePhaserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartRoutingModule {}

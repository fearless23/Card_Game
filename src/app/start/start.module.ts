import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StartRoutingModule, rc } from './start-routing.module';
import { GamesService } from './games.service';


@NgModule({
  imports: [StartRoutingModule, SharedModule],
  declarations: [...rc],
  providers: [GamesService],
})
export class StartModule {}

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StartRoutingModule, rc } from './start-routing.module';


@NgModule({
  imports: [StartRoutingModule, SharedModule],
  declarations: [...rc],
  providers: [],
})
export class StartModule {}

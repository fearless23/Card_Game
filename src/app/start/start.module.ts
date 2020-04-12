import { NgModule } from '@angular/core';
import { StartRoutingModule, rc } from './start-routing.module';

@NgModule({
  imports: [StartRoutingModule],
  declarations: [...rc],
  providers: [],
})
export class StartModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SimplePipePipe } from './pipes/simple-pipe.pipe';
import { DirectivesDirective } from './directives/directives.directive';



@NgModule({
  declarations: [SimplePipePipe, DirectivesDirective],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ]
})
export class SharedModule { }

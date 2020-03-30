import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SimplePipePipe } from './pipes/simple-pipe.pipe';
import { DirectivesDirective } from './directives/directives.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MaterialModule} from './material-module/material/material.module';



@NgModule({
  declarations: [SimplePipePipe, DirectivesDirective],
  exports: [

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ]
})
export class SharedModule { }

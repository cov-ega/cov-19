import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SimplePipePipe } from './pipes/simple-pipe.pipe';
import { DirectivesDirective } from './directives/directives.directive';
import {MaterialModule} from './material-module/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [SimplePipePipe, DirectivesDirective],
  exports: [

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }

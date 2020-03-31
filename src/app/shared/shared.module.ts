import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SimplePipePipe } from './pipes/simple-pipe.pipe';
import { DirectivesDirective } from './directives/directives.directive';
import {MaterialModule} from './material-module/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { UserCardComponent } from './components/user-card/user-card.component';



@NgModule({
  declarations: [SimplePipePipe, DirectivesDirective, UserCardComponent],
    exports: [
        UserCardComponent

    ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }

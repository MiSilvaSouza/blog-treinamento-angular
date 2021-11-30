import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';




@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ]
})
export class CommentsModule { }

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CommentsFormComponent } from './comments-form/comments-form.component';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';




@NgModule({
  declarations: [
    CommentsComponent,
    CommentsFormComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CommentsModule { }

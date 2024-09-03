import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteTaskFormComponent } from './delete-task-form/delete-task-form.component';
import { MainDeleteTaskFormComponent } from './main-delete-task-form/main-delete-task-form.component';

@NgModule({
  declarations: [
    DeleteTaskFormComponent,
    MainDeleteTaskFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MainDeleteTaskFormComponent
  ]
})
export class DeleteTaskFormModule { }

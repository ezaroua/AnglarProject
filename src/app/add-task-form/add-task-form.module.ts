import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { MainAddTaskFormComponent } from './main-add-task-form/main-add-task-form.component';
import { ErrorMinLengthFieldFormComponent } from '../error-min-length-field-form/error-min-length-field-form.component';
import { ErrorMaxLengthFieldFormComponent } from '../error-max-length-field-form/error-max-length-field-form.component';
import { ErrorRequiredFieldFormComponent } from '../error-required-field-form/error-required-field-form.component';

@NgModule({
  declarations: [
    AddTaskFormComponent,
    MainAddTaskFormComponent,
    ErrorMinLengthFieldFormComponent,
    ErrorMaxLengthFieldFormComponent,
    ErrorRequiredFieldFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MainAddTaskFormComponent  // Exporter les composants que vous souhaitez réutiliser ailleurs
  ]
})
export class AddTaskFormModule { }

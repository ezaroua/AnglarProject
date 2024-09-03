import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskComponent } from '../task/task.component';
import { MainTaskComponent } from '../main-task/main-task.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskStatusColorDirective } from '../directive/task-status-color.directive';
import { DateFormatPipe } from '../task/date-format.pipe';
import { AddTaskFormModule } from '../add-task-form/add-task-form.module';  // Importer AddTaskFormModule

@NgModule({
  declarations: [
    TaskComponent,
    MainTaskComponent,
    TaskListComponent,
    TaskStatusColorDirective,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    AddTaskFormModule  
  ]
})
export class TasksModule { }

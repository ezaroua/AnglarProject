import { Component, Input } from '@angular/core';
import { Task } from '../models/task';
import { DateFormatPipe } from './date-format.pipe';
import { TaskStatusColorDirective } from '../directive/task-status-color.directive';

@Component({
  selector: 'app-task',
  //standalone: true,
  //imports: [DateFormatPipe, TaskStatusColorDirective],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
@Input() currentTask!: Task;
}

import { Component, OnInit, Input } from '@angular/core';
import { TaskList } from '../models/task-list';
import { Task, TaskStat } from '../models/task';
import { TaskFacade } from '../services/task-facade.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() taskList!: TaskList;
  archivedTasks: Task[] = [];

  constructor(private taskFacade: TaskFacade) {}

  ngOnInit(): void {
    this.taskFacade.getAllTasks().subscribe(tasks => {
      this.taskList.tasks = tasks;
    });

    this.taskFacade.getTasksByStatut(TaskStat.TERMINEE).subscribe(tasks => {
      this.archivedTasks = tasks;
    });
  }
}

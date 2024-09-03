import { Component } from '@angular/core';
import { CRUDTaskListService } from '../../services/crud-task-list.service';
import { Task, TaskStat } from '../../models/task';

@Component({
  selector: 'app-main-add-task-form',
  templateUrl: './main-add-task-form.component.html',
  styleUrls: ['./main-add-task-form.component.scss']
})
export class MainAddTaskFormComponent {
  constructor(private taskService: CRUDTaskListService) {}

  onAddTask(taskData: { title: string, description: string, status: TaskStat }): void {
    const newTask = new Task(
      Math.random(),  // Génération d'un ID temporaire, à remplacer par une meilleure méthode
      taskData.status,
      taskData.description,
      taskData.title
    );

    this.taskService.addTask(newTask);
  }
}

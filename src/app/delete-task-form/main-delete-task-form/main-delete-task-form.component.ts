import { Component, OnInit } from '@angular/core';
import { CRUDTaskListService } from '../../services/crud-task-list.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-main-delete-task-form',
  templateUrl: './main-delete-task-form.component.html',
  styleUrls: ['./main-delete-task-form.component.scss']
})
export class MainDeleteTaskFormComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: CRUDTaskListService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      console.log('Tasks loaded:', this.tasks);
    });
  }

  onDeleteTask(title: string): void {
    const taskToDelete = this.tasks.find(task => task.titre === title);
    if (taskToDelete) {
      this.taskService.deleteTask(taskToDelete).subscribe(() => {
        console.log('Task deleted successfully:', taskToDelete);
        this.loadTasks(); // Recharge les tâches après suppression
      });
    } else {
      console.error('Task not found with title:', title);
    }
  }
}

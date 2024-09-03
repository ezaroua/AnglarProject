import { Component, OnInit } from '@angular/core';
import { TaskList } from '../models/task-list';
import { TaskFacade } from '../services/task-facade.service';
import { Task, TaskStat } from '../models/task';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent implements OnInit {
  taskList: TaskList;  
  archivedTasks: Task[] = [];

  constructor(private taskFacade: TaskFacade) {
    this.taskList = new TaskList(); 
  }

  ngOnInit(): void {
    // Souscrire aux tâches pour les ajouter à la liste principale
    this.taskFacade.getAllTasks().subscribe((tasks) => {
      this.taskList.tasks = tasks;
    });

    // Souscrire aux tâches archivées (statut TERMINEE)
    this.taskFacade.getTasksByStatut(TaskStat.TERMINEE).subscribe((tasks) => {
      this.archivedTasks = tasks;
    });
  }
}

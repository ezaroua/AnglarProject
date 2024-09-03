import { Injectable } from '@angular/core';
import { Task, TaskStat } from '../models/task';
import { CRUDTaskListService } from './crud-task-list.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskFacade {
  constructor(private crudService: CRUDTaskListService) {}

  // CRUD operations
  getAllTasks(): Observable<Task[]> {
    return this.crudService.getTasks();
  }

  addTask(task: Task): void {  // Simplification: ne retourne rien car on utilise BehaviorSubject
    this.crudService.addTask(task);
  }

  updateTask(task: Task): void {  // Simplification: ne retourne rien car on utilise BehaviorSubject
    this.crudService.updateTask(task);
  }

  deleteTask(task: Task): void {  // Simplification: ne retourne rien car on utilise BehaviorSubject
    this.crudService.deleteTask(task);
  }

  // Filtering by status
  getTasksByStatut(statut: TaskStat): Observable<Task[]> {
    return this.crudService.getTasks().pipe(
      map(tasks => tasks.filter(task => task.etat === statut))
    );
  }
}

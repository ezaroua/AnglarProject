import { Injectable } from '@angular/core';
import { Task, TaskStat } from '../models/task';
import { CRUDTaskListService } from './crud-task-list.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ByStatutTaskListService {
  constructor(private crudService: CRUDTaskListService) {}

  getTasksByStatut(statut: TaskStat): Observable<Task[]> {
    return this.crudService.getTasks().pipe(
      map(tasks => tasks.filter(task => task.etat === statut))
    );
  }
}

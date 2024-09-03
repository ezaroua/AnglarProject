import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Task, TaskStat } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class CRUDTaskListService {
  private taskListSubject: BehaviorSubject<Task[]>;  // BehaviorSubject pour gérer les tâches
  private taskList: Task[] = [];  // Liste locale des tâches

  constructor() {
    // Initialisation des tâches statiques
    const task1 = new Task(1, TaskStat.EN_COURS, 'Suivre un tutoriel sur Angular', 'Apprendre Angular');
    const task2 = new Task(2, TaskStat.A_FAIRE, 'Pratiquer avec une IA', 'Apprendre Anglais');
    const task3 = new Task(3, TaskStat.TERMINEE, 'Partir à 6h00 du matin', 'Aller au gym');
    
    this.taskList.push(task1, task2, task3);

    // Initialisation du BehaviorSubject avec la liste initiale des tâches
    this.taskListSubject = new BehaviorSubject<Task[]>(this.taskList);
  }

  getTasks(): Observable<Task[]> {
    return this.taskListSubject.asObservable();  // Retourne l'Observable du BehaviorSubject
  }

  addTask(task: Task): void {
    this.taskList.push(task);
    this.taskListSubject.next(this.taskList);  // Mise à jour du BehaviorSubject
  }

  updateTask(updatedTask: Task): void {
    const index = this.taskList.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.taskList[index] = updatedTask;
      this.taskListSubject.next(this.taskList);  // Mise à jour du BehaviorSubject
    }
  }

  deleteTask(taskToDelete: Task): Observable<void> {
    this.taskList = this.taskList.filter(task => task.id !== taskToDelete.id);
    this.taskListSubject.next(this.taskList);  // Mise à jour du BehaviorSubject
    return of();  // Retourne un Observable indiquant que l'opération est terminée
  }
}

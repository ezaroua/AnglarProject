import { Task } from './task';

export class TaskList {
  tasks: Task[];

  constructor(tasks: Task[] = []) {
    this.tasks = tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
}
}

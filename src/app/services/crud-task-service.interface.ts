import { Task } from "../models/task";

export interface ICRUDTaskService {
    getTasks(): Task[];
    addTask(task: Task): void;
    updateTask(task: Task): void;
    deleteTask(task: Task): void;
}

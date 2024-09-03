import { Task } from "../models/task";

export interface IByStatutTaskService {
    getTasksByStatut(statut: string): Task[];
}

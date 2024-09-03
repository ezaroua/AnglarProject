import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskStat } from '../../models/task';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {
  @Output() addTask = new EventEmitter<{ title: string, description: string, status: TaskStat }>();

  taskForm!: FormGroup;
  TaskStat = TaskStat;  // Ajout de cette ligne pour rendre TaskStat accessible dans le template

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      status: [TaskStat.A_FAIRE, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.addTask.emit(this.taskForm.value);
      this.taskForm.reset({ status: TaskStat.A_FAIRE });  // Réinitialise le formulaire
    }
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-task-form',
  templateUrl: './delete-task-form.component.html',
  styleUrls: ['./delete-task-form.component.scss']
})
export class DeleteTaskFormComponent implements OnInit {
  @Output() deleteTask = new EventEmitter<string>();
  deleteForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.deleteForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(): void {
    if (this.deleteForm.valid) {
      console.log('Form submitted with title:', this.deleteForm.value.title);
      this.deleteTask.emit(this.deleteForm.value.title);
      this.deleteForm.reset();
    }
  }
}

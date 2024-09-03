import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-required-field-form',
  template: `
    <div *ngIf="showError">
      <p>{{ fieldName }} is required.</p>
    </div>
  `,
  styleUrls: ['./error-required-field-form.component.scss']
})
export class ErrorRequiredFieldFormComponent {
  @Input() showError = false;
  @Input() fieldName = '';
}

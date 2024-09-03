import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-minLength-field-form',
  templateUrl: './error-min-length-field-form.component.html'
  // Retirez `styleUrls` si le fichier SCSS n'est pas nécessaire
})
export class ErrorMinLengthFieldFormComponent {
  @Input() showError = false;
  @Input() fieldName = '';
  @Input() minLength = 0;
}

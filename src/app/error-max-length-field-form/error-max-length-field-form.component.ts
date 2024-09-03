import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-maxLength-field-form',
  templateUrl: './error-max-length-field-form.component.html'
  // Retirez `styleUrls` si le fichier SCSS n'est pas nécessaire
})
export class ErrorMaxLengthFieldFormComponent {
  @Input() showError = false;
  @Input() fieldName = '';
  @Input() maxLength = 0;
}

import { Directive, ElementRef, Input } from '@angular/core';
import { TaskStat } from '../models/task';

@Directive({
  selector: '[appTaskStatusColor]',
  //standalone: true
})
export class TaskStatusColorDirective {

  @Input() appTaskStatusColor!: TaskStat;

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    this.updateColor();
  }

  private updateColor(): void {
    switch (this.appTaskStatusColor) {
      case TaskStat.EN_COURS:
        this.el.nativeElement.style.color = 'blue';
        break;
      case TaskStat.A_FAIRE:
        this.el.nativeElement.style.color = 'red';
        break;
      case TaskStat.TERMINEE:
        this.el.nativeElement.style.color = 'green';
        break;
      default:
        this.el.nativeElement.style.color = 'black';
        break;
    }
  }

}

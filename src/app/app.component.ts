import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { MainTaskComponent } from './main-task/main-task.component';
import { TasksModule } from './tasks/tasks.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TasksModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TP1';
}

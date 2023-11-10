import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learnAngular17';
  userDatasList: Array<{
    name: string;
    age: number;
    profession: string;
    id: string;
  }> = [
    { age: 20, name: 'Marcos', profession: 'Software Developer', id: '123' },
    { age: 30, name: 'Marcelo', profession: 'Software Developer', id: '456' },
    { age: 40, name: 'Carlos', profession: 'Scrum Master', id: '789' },
    { age: 30, name: 'Maria', profession: 'UX Designer', id: '123' },
  ];
}

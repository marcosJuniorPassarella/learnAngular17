import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputTransformComponent } from './components/input-transform/input-transform.component';

export interface User {
  name: string;
  age: string;
  profession: string;
  id: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTransformComponent],
  template: `
    <app-input-transform
      [userAge]="userDatasList[0].age"
      [showUserAge]="showUser"
    />
    <!-- <div
      style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 1rem;"
    >
      <button (click)="renderBlock = true">Renderizar título</button>

      @defer(when renderBlock) {
      <h3 style="color: red;">Element rendered on interaction</h3>
      } @placeholder {
      <span style="color: blue;">Conteúdo inicial do placeholder</span>
      }
    </div> -->
  `,
  styleUrls: [],
})
export class AppComponent {
  showUser = 'true';
  renderBlock = false;
  title = 'learnAngular17';
  userDatasList: Array<User> = [
    { age: '20', name: 'Marcos', profession: 'Software Developer', id: '123' },
    { age: '30', name: 'Marcelo', profession: 'Software Developer', id: '456' },
    { age: '40', name: 'Carlos', profession: 'Scrum Master', id: '789' },
    { age: '30', name: 'Maria', profession: 'UX Designer', id: '123' },
  ];
}

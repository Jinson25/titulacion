import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet>hola admin</router-outlet>`,
  styles: ``,
})
export class AdminComponent {}

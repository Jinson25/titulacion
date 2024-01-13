import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterModule],
  template: ` 
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>`,
  styles: `
  `,
})
export class PagesComponent {}

import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterModule, HttpClientModule, NavbarComponent],
  template: `<app-navbar></app-navbar> <router-outlet></router-outlet>`,
  styles: '',
})
export class ClientComponent {}

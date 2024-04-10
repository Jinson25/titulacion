import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuItems = [
    { name: 'Inicio', link: '/home' },
    { name: 'Servicios', link: '/services' },
    { name: 'Chat', link: '/forum' }
  ];
  jinson = 'Jinson';

  isLogged = true;
}

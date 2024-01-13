import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logo = 'YaviNetwork';
  menuItems = [
    { name: 'Inicio', link: '/home' },
    { name: 'Servicios', link: '/services' },
    { name: 'Foro', link: '/forum' }
  ];
  positionFixed = true;
}

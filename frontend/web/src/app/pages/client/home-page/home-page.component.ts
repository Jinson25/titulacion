import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public user!: any[]; // Datos de las publicaciones

  calculateFlex(likes: number): string {
    // Lógica para calcular el factor de flexibilidad basado en la cantidad de likes
    // Puedes ajustar esta lógica según tus preferencias
    const baseFlex = 1; // Factor de flexibilidad base
    const flexIncrement = 0.1; // Incremento de flexibilidad por like

    return `${baseFlex + likes * flexIncrement}`;
  }
}

import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule
  ],
  template: `
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'portfolio-website';
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // template: `
  //   <app-header />
  //   <main>
  //     <router-outlet />
  //   </main>
  // `
})
export class AppComponent {
  title = 'first-app';
}

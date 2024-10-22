import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule,HomeComponent], // Import HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected from styleUrl to styleUrls
})
export class AppComponent {
  title = 'project';
}

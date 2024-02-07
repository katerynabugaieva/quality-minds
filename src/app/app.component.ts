import { HousingLocationComponent } from './housing-location/housing-location.component';
import { AppHeader } from './header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Housinglocation } from './housinglocation';
import { CommonModule } from '@angular/common';
import { AppContentComponent } from './content/content.component';
import {  NewsComponent} from "./news/news.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeader, CommonModule, HousingLocationComponent, AppContentComponent, NewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quality-minds';
}


export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: Housinglocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: string = '';
  temperature: number = 0;
  description: string = '';
  icon: string ='';
  weather: any;
  errorMessage: string = '';
  backgroundImage: string = '';

  constructor(private http: HttpClient, private router: Router,private weatherService: WeatherService) { }

  ngOnInit() {}

  



  clearData() {
    this.city = '';
    this.weather = null;
    this.errorMessage = '';
    this.backgroundImage = '';
  }

  onSubmit() {
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.temperature = data.main.temp - 273;
        this.description = data.weather[0].description;
        this.icon = data.weather[0].icon;
        this.errorMessage = '';

        // change background based on weather
        const weather = this.description.toLowerCase();
        if (weather.includes('sunny')) {
          document.body.style.backgroundImage = 'url("../assets/images/sunny-bg.jpg")';
        } else if (weather.includes('cloud')) {
          document.body.style.backgroundImage = 'url("../assets/images/cloudy-bg.jpg")';
        } else if (weather.includes('rain')) {
          document.body.style.backgroundImage = 'url("../assets/images/rainy-bg.jpg")';
        } else if (weather.includes('snow')) {
          document.body.style.backgroundImage = 'url("../assets/images/snowy-bg.jpg")';
        } else {
          document.body.style.backgroundImage = 'url("../assets/images/default-bg.jpg")';
        }
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.message;
        this.temperature = 0;
        this.description = '';
        this.icon = '';
      }
      
      
    );
  }

  
}

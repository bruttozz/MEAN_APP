import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  errorMessage: string;
  weatherForecastData: any;
  disabledForecastButton: boolean;
  cityName: string;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
  }
  onSubmit(cityName: string) {
    console.log(cityName);
    this.weatherService.getWeatherForecast(cityName)
      .subscribe(data => { this.weatherForecastData = data.list; }, error => this.errorMessage = error as any);
  }

  onSearchLocation(cityName: string) {
    this.disabledForecastButton = false;
    console.log(cityName);
  }

  onSubmitDatabinding() {
    console.log('Inside the two way', this.cityName);
    this.weatherService.getWeatherForecast(this.cityName)
      .subscribe(data => { this.weatherForecastData = data.list; }, error => this.errorMessage = error as any);
    this.onResetControls();
  }

  onSearchLocationWithEvent(event: Event) {
    console.log('Control event value', (event.target as HTMLInputElement).value);
    this.cityName = (event.target as HTMLInputElement).value;
    this.disabledForecastButton = false;
  }

  onResetControls() {
    this.cityName = '';
    this.disabledForecastButton = true;
  }
}

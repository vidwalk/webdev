import {
  Component,
  OnInit
} from '@angular/core';
import { Weather } from '../weather';
import {
  WeatherService
} from '../weather.service'
@Component({
  selector: 'app-weather-post',
  templateUrl: './weather-post.component.html',
  styleUrls: ['./weather-post.component.css']
})
export class WeatherPostComponent implements OnInit {
  weatherReports: Weather[];
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherReports();
  }
  getWeatherReports(): void {
    this.weatherService.getWeather().subscribe(weatherReports => {
      this.weatherReports = weatherReports
    });
  }

  add(value: number, type: string, unit: string, time: Date, place: string, precipitation_type: string, direction: string): void {
    this.weatherService.postWeather({ value, type, unit, time, place, precipitation_type, direction } as Weather).subscribe(weather => {
      this.weatherReports.push(weather);
    });
  }
}

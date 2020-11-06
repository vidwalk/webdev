import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CloudCoverage, WindSpeed, Precipitation, Temperature, Weather } from '../weather';
import { WeatherService } from '../weather.service'
import { MessageService } from '../message.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  date = new FormControl(new Date());
  yesterday = new FormControl((d => new Date(d.setDate(d.getDate() - 2)))(new Date));
  range = new FormGroup({
    start: this.yesterday,
    end: this.date
  });
  temperatures: Temperature[];
  precipitations: Precipitation[];
  windspeeds: WindSpeed[];
  cloudcoverages: CloudCoverage[];
  constructor(private weatherService: WeatherService, private messageService: MessageService) { }

  ngOnInit(): void {

    this.getWeatherReports();
  }
  getWeatherReports(): void {
    this.weatherService.getWeather().subscribe(weatherReports => {
      weatherReports = weatherReports.filter(weatherReports => ((new Date(this.range.value.start) < new Date(weatherReports.time)) && (new Date(weatherReports.time) < new Date(this.range.value.end))));
      this.temperatures = weatherReports.filter(weatherReports => weatherReports.type === 'temperature');
      this.precipitations = weatherReports.filter(weatherReports => weatherReports.type === 'precipitation');
      this.windspeeds = weatherReports.filter(weatherReports => weatherReports.type === 'wind speed');
      this.cloudcoverages = weatherReports.filter(weatherReports => weatherReports.type === 'cloud coverage');
    });
  }
  getHorsens(): void {
    this.weatherService.getWeather().subscribe(weatherReports => {
      weatherReports = weatherReports.filter(weatherReports => ((new Date(this.range.value.start) < new Date(weatherReports.time)) && (new Date(weatherReports.time) < new Date(this.range.value.end))));
      weatherReports = weatherReports.filter(weatherReports => weatherReports.place === 'Horsens')
      this.temperatures = weatherReports.filter(weatherReports => weatherReports.type === 'temperature');
      this.precipitations = weatherReports.filter(weatherReports => weatherReports.type === 'precipitation');
      this.windspeeds = weatherReports.filter(weatherReports => weatherReports.type === 'wind speed');
      this.cloudcoverages = weatherReports.filter(weatherReports => weatherReports.type === 'cloud coverage');
    });
  }
  getAarhus(): void {
    this.weatherService.getWeather().subscribe(weatherReports => {
      weatherReports = weatherReports.filter(weatherReports => ((new Date(this.range.value.start) < new Date(weatherReports.time)) && (new Date(weatherReports.time) < new Date(this.range.value.end))));
      weatherReports = weatherReports.filter(weatherReports => weatherReports.place === 'Aarhus')
      this.temperatures = weatherReports.filter(weatherReports => weatherReports.type === 'temperature');
      this.precipitations = weatherReports.filter(weatherReports => weatherReports.type === 'precipitation');
      this.windspeeds = weatherReports.filter(weatherReports => weatherReports.type === 'wind speed');
      this.cloudcoverages = weatherReports.filter(weatherReports => weatherReports.type === 'cloud coverage');
    });
  }
  getCopenhagen(): void {
    this.weatherService.getWeather().subscribe(weatherReports => {
      weatherReports = weatherReports.filter(weatherReports => ((new Date(this.range.value.start) < new Date(weatherReports.time)) && (new Date(weatherReports.time) < new Date(this.range.value.end))));
      weatherReports = weatherReports.filter(weatherReports => weatherReports.place === 'Copenhagen')
      this.temperatures = weatherReports.filter(weatherReports => weatherReports.type === 'temperature');
      this.precipitations = weatherReports.filter(weatherReports => weatherReports.type === 'precipitation');
      this.windspeeds = weatherReports.filter(weatherReports => weatherReports.type === 'wind speed');
      this.cloudcoverages = weatherReports.filter(weatherReports => weatherReports.type === 'cloud coverage');
    });
  }
}

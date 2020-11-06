import { Component, OnInit } from '@angular/core';
import { ForecastCloudCoverage, ForecastWindSpeed, ForecastPrecipitation, ForecastTemperature, Forecast } from '../forecast';
import { FormsModule, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  date = new FormControl(new Date());
  tommorow = new FormControl((d => new Date(d.setDate(d.getDate() + 2)))(new Date));
  range = new FormGroup({
    start: this.date,
    end: this.tommorow
  });
  temperatures: ForecastTemperature[];
  precipitations: ForecastPrecipitation[];
  windspeeds: ForecastWindSpeed[];
  cloudcoverages: ForecastCloudCoverage[];
  constructor(private weatherService: WeatherService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getForecastReports();
  }
  getForecastReports(): void {
    this.weatherService.getForecast().subscribe(forecastReports => {
      forecastReports = forecastReports.filter(forecastReports => ((new Date(this.range.value.start) < new Date(forecastReports.time)) && (new Date(forecastReports.time) < new Date(this.range.value.end))));
      this.temperatures = forecastReports.filter(forecastReports => forecastReports.type === 'temperature');
      this.precipitations = forecastReports.filter(forecastReports => forecastReports.type === 'precipitation');
      this.windspeeds = forecastReports.filter(forecastReports => forecastReports.type === 'wind speed');
      this.cloudcoverages = forecastReports.filter(forecastReports => forecastReports.type === 'cloud coverage');
    });
  }
  getHorsens(): void {
    this.weatherService.getForecast().subscribe(forecastReports => {
      forecastReports = forecastReports.filter(forecastReports => ((new Date(this.range.value.start) < new Date(forecastReports.time)) && (new Date(forecastReports.time) < new Date(this.range.value.end))));
      forecastReports = forecastReports.filter(forecastReports => forecastReports.place === 'Horsens')
      this.temperatures = forecastReports.filter(forecastReports => forecastReports.type === 'temperature');
      this.precipitations = forecastReports.filter(forecastReports => forecastReports.type === 'precipitation');
      this.windspeeds = forecastReports.filter(forecastReports => forecastReports.type === 'wind speed');
      this.cloudcoverages = forecastReports.filter(forecastReports => forecastReports.type === 'cloud coverage');
    });
  }
  getAarhus(): void {
    this.weatherService.getForecast().subscribe(forecastReports => {
      forecastReports = forecastReports.filter(forecastReports => ((new Date(this.range.value.start) < new Date(forecastReports.time)) && (new Date(forecastReports.time) < new Date(this.range.value.end))));
      forecastReports = forecastReports.filter(forecastReports => forecastReports.place === 'Aarhus')
      this.temperatures = forecastReports.filter(forecastReports => forecastReports.type === 'temperature');
      this.precipitations = forecastReports.filter(forecastReports => forecastReports.type === 'precipitation');
      this.windspeeds = forecastReports.filter(forecastReports => forecastReports.type === 'wind speed');
      this.cloudcoverages = forecastReports.filter(forecastReports => forecastReports.type === 'cloud coverage');
    });
  }
  getCopenhagen(): void {
    this.weatherService.getForecast().subscribe(forecastReports => {
      forecastReports = forecastReports.filter(forecastReports => ((new Date(this.range.value.start) < new Date(forecastReports.time)) && (new Date(forecastReports.time) < new Date(this.range.value.end))));
      forecastReports = forecastReports.filter(forecastReports => forecastReports.place === 'Copenhagen')
      this.temperatures = forecastReports.filter(forecastReports => forecastReports.type === 'temperature');
      this.precipitations = forecastReports.filter(forecastReports => forecastReports.type === 'precipitation');
      this.windspeeds = forecastReports.filter(forecastReports => forecastReports.type === 'wind speed');
      this.cloudcoverages = forecastReports.filter(forecastReports => forecastReports.type === 'cloud coverage');
    });
  }
}

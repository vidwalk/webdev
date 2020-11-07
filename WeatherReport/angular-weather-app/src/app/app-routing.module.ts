import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component'
import { WeatherPostComponent } from './weather-post/weather-post.component'
const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'forecast', component: ForecastComponent },
  { path: 'post', component: WeatherPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { Forecast } from './forecast';
import { TEMPERATURES } from './mock-temperatures';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherUrl = 'http://localhost:8080/data';  // URL to web api
  private forecastUrl = 'http://localhost:8080/forecast'
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  /** GET weather from the server */
  getWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.weatherUrl)
      .pipe(
        tap(_ => this.log('fetched data')),
        catchError(this.handleError<Weather[]>('getWeather', []))
      );
  }
  getForecast(): Observable<Forecast[]> {
    return this.http.get<Forecast[]>(this.forecastUrl)
      .pipe(
        tap(_ => this.log('fetched data')),
        catchError(this.handleError<Forecast[]>('getForecast', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

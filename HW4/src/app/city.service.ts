import { Injectable } from '@angular/core';
import { Locations } from './location';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private citiesUrl = 'api/cities';  // URL to web api
  private hw3Url = 'http://localhost:3000/users';
  data: Object = [];

  constructor(
    private http: HttpClient,
  ) { }

  /** GET cities from the server */
  getHeroes(): Observable<Locations[]> {
    // this.messageService.add('CityService: fetched cities');
    // return of(HEROES);
    return this.http.get<Locations[]>(this.citiesUrl)
      .pipe(
        // tap(_ => this.log('fetched cities')),
        catchError(this.handleError<Locations[]>('getHeroes', []))
      );
  }

  /** PUT: update the hero on the server */
  updateHero(city: Locations): Observable<any> {
    return this.http.put(this.citiesUrl, city, httpOptions).pipe(
      // tap(_ => this.log(`updated city id=${city.id}`)),
      // catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addCity(city: Locations): Observable<Locations> {
    return this.http.post<Locations>(this.citiesUrl, city, httpOptions).pipe(
      // tap((newHero: Locations) => this.log(`added city w/ id=${newHero.id}`)),
      catchError(this.handleError<Locations>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(city: Locations | number): Observable<Locations> {
    const id = typeof city === 'number' ? city : city.id;
    const url = `${this.citiesUrl}/${id}`;

    return this.http.delete<Locations>(url, httpOptions).pipe(
      // tap(_ => this.log(`deleted city id=${id}`)),
      catchError(this.handleError<Locations>('deleteHero'))
    );
  }

  getData(heroName: string) {
    return this.http.get(this.hw3Url, {params:{req: heroName}})
      .pipe(
        catchError(this.handleError<any>('updateHero'))
      );
  }

  getDescription(heroName: string): Observable<any> {

    return this.getData(heroName)
      .pipe(
        tap(res => {
        this.data = res;
        console.log(this.data); }),
        catchError(this.handleError<any>('getData', []))
      );

  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

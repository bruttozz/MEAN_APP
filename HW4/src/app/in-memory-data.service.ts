import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Locations } from './location';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cities = [
      { id: 1, user: 'Brutto', city: 'Boston' },
      { id: 2, user: 'Brutto', city: 'Beijing' },
      { id: 3, user: 'Brutto', city: 'Dublin' },
    ];
    return {cities};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the cities array is empty,
  // the method below returns the initial number (11).
  // if the cities array is not empty, the method below returns the highest
  // hero id + 1.

  genId(cities: Locations[]): number {
    return cities.length > 0 ? Math.max(...cities.map(city => city.id)) + 1 : 21;
  }

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { Locations } from '../location';
import { CityService } from '../city.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})

// Always export the component class so you can import it elsewhere ... like in the AppModule.
export class CitiesComponent implements OnInit {
  heroes: Locations[];

  constructor(private heroService: CityService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, city: string): void {
    name = name.trim();
    city = city.trim();

    if (!name || !city) {
      return;
    }
    this.heroService.addCity( {id: 100, user: name, city: city} as Locations)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(city: Locations): void {
    this.heroes = this.heroes.filter(h => h !== city);
    this.heroService.deleteHero(city).subscribe();
  }

}

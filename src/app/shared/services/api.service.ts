import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from 'src/app/models/hero';
import { HeroPowerstat } from 'src/app/models/hero-powerstat';
import { HeroBiography } from 'src/app/models/hero-biography';
import { HeroApparence } from 'src/app/models/hero-apparence';
import { HeroWork } from 'src/app/models/hero-work';
import { HeroConnections } from 'src/app/models/hero-connections';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:8000/heros/';

  constructor(private httpClient: HttpClient) {}

  getHeros() {
    return this.httpClient.get<Hero[]>(this.url);
  }

  getHerosForHome() {
    return this.httpClient.get<Hero[]>(this.url + 'home');
  }

  getHero(id) {
    return this.httpClient.get<Hero>(this.url + id);
  }
}

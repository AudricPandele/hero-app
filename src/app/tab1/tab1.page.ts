import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Hero } from '../models/hero';
import { HeroDetailsPage } from '../hero-details/hero-details.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  heros: Hero[];

  constructor(private apiService: ApiService, private navCtrl: NavController) {}

  ngOnInit(): void {
    this.apiService.getHerosForHome().subscribe(res => {
      this.heros = res;
    });
  }

  inputSearch(event) {
    this.apiService
      .postSearch({ search: event.target.value })
      .subscribe(res => {
        this.heros = res;
      });
  }
}

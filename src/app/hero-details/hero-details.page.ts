import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.page.html',
  styleUrls: ['./hero-details.page.scss']
})
export class HeroDetailsPage implements OnInit {
  hero: Hero;
  color = 'grey';
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.apiService.getHero(this.route.snapshot.params.id).subscribe(res => {
      this.hero = res;
    });
  }
}

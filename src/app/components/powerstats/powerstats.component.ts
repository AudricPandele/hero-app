import { Component, OnInit, Input } from '@angular/core';
import { HeroPowerstat } from 'src/app/models/hero-powerstat';

@Component({
  selector: 'app-powerstats',
  templateUrl: './powerstats.component.html',
  styleUrls: ['./powerstats.component.scss']
})
export class PowerstatsComponent implements OnInit {
  @Input() powerstats: HeroPowerstat;

  constructor() {}

  ngOnInit() {}
}

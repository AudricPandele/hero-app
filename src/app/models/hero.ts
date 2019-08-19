import { HeroPowerstat } from './hero-powerstat';
import { HeroBiography } from './hero-biography';
import { HeroApparence } from './hero-apparence';
import { HeroWork } from './hero-work';
import { HeroConnections } from './hero-connections';

export class Hero {
  public id: number;
  public name: string;
  public powerstats: HeroPowerstat;
  public biography: HeroBiography;
  public apparence: HeroApparence;
  public work: HeroWork;
  public connections: HeroConnections;
  public images: [string];
  public rarity: number;
  public color: string;

  constructor(
    id: number,
    name: string,
    powerstats: HeroPowerstat,
    biography: HeroBiography,
    apparence: HeroApparence,
    work: HeroWork,
    connections: HeroConnections,
    images: [string],
    rarity: number,
    color: string
  ) {
    this.id = id;
    this.name = name;
    this.powerstats = powerstats;
    this.biography = biography;
    this.apparence = apparence;
    this.work = work;
    this.connections = connections;
    this.images = images;
    this.rarity = rarity;
    this.color = color;
  }
}

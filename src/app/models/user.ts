import { Hero } from './hero';

export class User {
  public id: number;
  public name: string;
  public apiKey: string;
  public heros: [Hero];
  public heroPoints: string;

  constructor(
    id: number,
    name: string,
    apiKey: string,
    heros: [Hero],
    heroPoints: string
  ) {
    this.id = id;
    this.name = name;
    this.apiKey = apiKey;
    this.heros = heros;
    this.heroPoints = heroPoints;
  }
}

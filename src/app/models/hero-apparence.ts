export class HeroApparence {
  gender: string;
  race: string;
  height: [string];
  weight: [string];
  eyeColor: string;
  hairColor: string;

  constructor(
    gender: string,
    race: string,
    height: [string],
    weight: [string],
    eyeColor: string,
    hairColor: string
  ) {
    this.gender = gender;
    this.race = race;
    this.height = height;
    this.weight = weight;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
  }
}

export class HeroPowerstat {
  public intelligence: number;
  public strength: number;
  public speed: number;
  public durability: number;
  public power: number;
  public combat: number;
  public avg: number;
  public sum: number;

  constructor(
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number,
    avg: number,
    sum: number
  ) {
    this.intelligence = intelligence;
    this.strength = strength;
    this.speed = speed;
    this.durability = durability;
    this.power = power;
    this.combat = combat;
    this.avg = avg;
    this.sum = sum;
  }
}

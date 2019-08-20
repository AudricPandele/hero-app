export class HeroBiography {
  public fullName: string;
  public alterEgos: string;
  public aliases: string;
  public placeOfBirth: string;
  public firstAppearance: string;
  public publisher: string;
  public alignment: string;

  constructor(
    fullName: string,
    alterEgos: string,
    aliases: string,
    placeOfBirth: string,
    firstAppearance: string,
    publisher: string,
    alignment: string
  ) {
    this.fullName = fullName;
    this.alterEgos = alterEgos;
    this.aliases = aliases;
    this.placeOfBirth = placeOfBirth;
    this.firstAppearance = firstAppearance;
    this.publisher = publisher;
    this.alignment = alignment;
  }
}

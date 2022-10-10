export default class Order {
  id: string;
  nmae: string;
  prepTime: number;

  constructor(id: string, nmae: string, prepTime: number) {
    this.id = id;
    this.nmae = nmae;
    this.prepTime = prepTime;
  }
}

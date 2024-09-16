export default class User {
  constructor(
    public name: string,
    public age: number,
    public weight: number,
    public height: number
  ) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
  }
}

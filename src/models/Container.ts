export class Container {
  name: string;
  state: string;
  image: string;

  constructor(name: string, state: string, image: string) {
    this.name = name;
    this.state = state;
    this.image = image;
  }
}

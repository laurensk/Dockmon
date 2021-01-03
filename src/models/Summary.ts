import {Container} from './Container';

export class Summary {
  endpoints: number;
  containers: Container[];

  constructor(endpoints: number, containers: Container[]) {
    this.endpoints = endpoints;
    this.containers = containers;
  }
}

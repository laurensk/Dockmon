import {Container} from './Container';

export class Summary {
  nodes: number;
  stacks: number;
  containers: Container[];

  constructor(nodes: number, stacks: number, containers: Container[]) {
    this.nodes = nodes;
    this.stacks = stacks;
    this.containers = containers;
  }
}

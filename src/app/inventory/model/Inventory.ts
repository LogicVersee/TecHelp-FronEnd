import {Item} from "./Item";

export class Inventory {
  id: number;
  technicalId: number;
  items: Item[];

  constructor() {
    this.id = 0;
    this.technicalId = 0;
    this.items = [];
  }
}

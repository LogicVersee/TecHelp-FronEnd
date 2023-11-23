import {Component, OnInit} from '@angular/core';
import {InventoryService} from "../../services/inventory.service";
import {Item} from "../../model/Item";
import {Inventory} from "../../model/Inventory";

@Component({
  selector: 'app-inventory-technical',
  templateUrl: './inventory-technical.component.html',
  styleUrls: ['./inventory-technical.component.css']
})
export class InventoryTechnicalComponent implements OnInit{
  inventory:any[] = [];
  item: Item = new Item();
  items: Item[] = [];
  id = "1";

  constructor(private  inventoryService: InventoryService) {
  }

  getAllItems(){
    this.inventoryService.getById(this.id).subscribe((response:any)=>{
      this.inventory = response.items;
      for(let i in this.inventory){
        let item = new Item();
        item.name = this.inventory[i].name;
        item.quantity = this.inventory[i].quantity;
        item.price = this.inventory[i].price;
        this.items.push(item);
      }
      console.log(this.items);
    })
  }
  onSubmit(){
    let inventory = new Inventory();
    inventory.id = Number(this.id);
    inventory.technicalId = Number(this.id);
    inventory.items = this.items;
    this.inventoryService.updateResource(this.id,inventory).subscribe();
    console.log(inventory);
  }

  onAdd(){
    let item = new Item();
    this.items.push(item);
  }

  ngOnInit(): void {
    this.getAllItems();
  }

  updateItemValue(event: any, property: String, index: number) {
    const newValue = event.target.value;
    this.items[index].name = newValue;
  }
  updateAmountValue(event: any, property: number, index: number) {
    const newValue = event.target.value;
    this.items[index].quantity = newValue;
  }
  updatePriceValue(event: any, property: number, index: number) {
    const newValue = event.target.value;
    this.items[index].price = newValue;
  }
}

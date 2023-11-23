import {Component, OnInit} from '@angular/core';
import {InventoryService} from "../../services/inventory.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inventory-summary',
  templateUrl: './inventory-summary.component.html',
  styleUrls: ['./inventory-summary.component.css']
})
export class InventorySummaryComponent implements OnInit{
  id = "1";
  items: any[] = [];
  constructor(private router: Router,private inventoryService: InventoryService) {

  }

  getAllItems(){
    this.inventoryService.getById(this.id).subscribe((response:any)=>{
      console.log(response)
      this.items = response.items;
      console.log(this.items);
    })
  }
  ngOnInit(): void {
    this.getAllItems();
  }

  goToItems(){
    this.router.navigate([`inventory/summary/items`])
  }

}

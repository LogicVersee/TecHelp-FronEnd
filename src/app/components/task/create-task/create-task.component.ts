import {Component, OnInit} from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatLegacyChipInputEvent} from "@angular/material/legacy-chips";


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit{

  selectedComponents: string[] = [];
  componentOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  enableSelect: boolean = false;

  onSelectChange(event: any) {
    this.selectedComponents = event.value;
  }



  toggleInputType(event: Event) {
    this.enableSelect = !this.enableSelect;
    event.preventDefault(); // Evitar la recarga de la página al hacer clic
  }
  constructor() {
  }
  ngOnInit() {
  }
}

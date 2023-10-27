import {Component, OnInit} from '@angular/core';
import {Task} from "../../interfaces/task";
import {MatTableDataSource} from "@angular/material/table";



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  listTask: Task[] = [
    {id: 1, name: 'Luis', cellphone: 'Motorola', problem: 'crash', element: 'batery', income:'60'},
    {id: 2, name: 'Sandra', cellphone: 'Motorola', problem: 'crash', element: 'batery', income:'40'},
  ];


  displayedColumns: string[] = ['id', 'name', 'cellphone', 'date','action'];
  dataSource = new MatTableDataSource(this.listTask);

  constructor() {
  }

  ngOnInit() {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

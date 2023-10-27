import {Component, OnInit} from '@angular/core';
import {Task} from "../../interfaces/task";


const listTask: Task[] = [
  {id: 1, name: 'Luis', cellphone: 'Motorola', problem: 'crash', element: 'batery', income:'60'},

];
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'cellphone', 'date','action'];
  dataSource = listTask;

  constructor() {
  }

  ngOnInit() {
  }
}

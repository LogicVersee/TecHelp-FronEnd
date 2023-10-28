import {Component, OnInit, ViewChild} from '@angular/core';
import {Task} from "../../interfaces/task";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {TaskService} from "../../services/task.service";



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  listTask: Task[]=[];

  displayedColumns: string[] = ['id', 'name', 'cellphone', 'date','action'];
  dataSource!:MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _taskService: TaskService) {
  }

  ngOnInit() {
    this.chargeTask();
  }

  chargeTask(){
    this.listTask=this._taskService.getTask();
    this.dataSource=new MatTableDataSource(this.listTask)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminateTask(index:number){
    console.log(index);
    this._taskService.eliminateTask(index);
    this.chargeTask();
  }
}

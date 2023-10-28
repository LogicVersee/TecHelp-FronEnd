import { Injectable } from '@angular/core';
import {Task} from "../interfaces/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  listTask: Task[] = [
    {id: 1, name: 'Luis', cellphone: 'Motorola', problem: 'crash', element: 'batery', income:'60'},
    {id: 2, name: 'Sandra', cellphone: 'Motorola', problem: 'crash', element: 'batery', income:'40'},
    {id: 3, name: 'Sandra', cellphone: 'Motorola', problem: 'crash', element: 'batery', income:'40'},
    {id: 4, name: 'Sandra', cellphone: 'Motorola', problem: 'crash', element: 'batery', income:'40'},
    {id: 5, name: 'Sandra', cellphone: 'Motorola', problem: 'crash', element: 'batery', income:'40'},
    {id: 6, name: 'Sandra', cellphone: 'Motorola', problem: 'crash', element: 'batery', income:'40'},
    {id: 7, name: 'Sandra', cellphone: 'Motorola', problem: 'crash', element: 'batery', income:'40'},
  ];
  constructor() { }

  getTask(){
    return this.listTask.slice();
  }
  eliminateTask(index:number){
    this.listTask.splice(index,1);
  }
}

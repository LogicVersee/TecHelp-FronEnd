import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order/order.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-order-user',
  templateUrl: './view-order-user.component.html',
  styleUrls: ['./view-order-user.component.css']
})
export class ViewOrderUserComponent implements OnInit{
  task:any=[];
  uo: string = "";
  constructor(private route: ActivatedRoute,private tasksService:OrderService,private routers: Router) {
    this.route.params.subscribe(params => {
      this.uo = params['id'];
    })
  }

  private getTask(){
    let urlId = '?id=' + this.uo;
    this.tasksService.getById(urlId).subscribe((response:any) => {
      this.task = response;
    })
  }
  taskdetailsRoute() {
    this.routers.navigate([`home/user/task`])
  }


  ngOnInit(): void {
    this.getTask();
  }
}

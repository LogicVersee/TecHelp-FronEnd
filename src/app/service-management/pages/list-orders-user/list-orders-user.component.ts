import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {OrderService} from "../../services/order/order.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-list-orders-user',
  templateUrl: './list-orders-user.component.html',
  styleUrls: ['./list-orders-user.component.css']
})
export class ListOrdersUserComponent implements OnInit{

  displayedColumns: string[] = ['client_name', 'phone_name', 'delivery_day','problem', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, private orderviewService: OrderService, private dialog: MatDialog) {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getOrders(){
    this.orderviewService.getAll().subscribe(
      {
        next:(res:any)=>{

          this.dataSource = new  MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;

        },
        error:(err)=>{
          alert("Error while fetching the Orders!!")
        }
      }
    )
  }

  taskdetailsRoute(id: any) {
    this.router.navigate([`home/user/task/${id}`])
  }

  ngOnInit(): void {
    this.getOrders();
  }
}

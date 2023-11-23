import {Component, OnInit,AfterViewInit,ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateOrderDialogComponent} from "../../components/create-order-dialog/create-order-dialog.component";
import {OrderService} from "../../services/order/order.service";
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CreateRequestDialogComponent} from "../../components/create-request-dialog/create-request-dialog.component";

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit{

  displayedColumns: string[] = ['client_name', 'phone_name', 'delivery_day','problem', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog:MatDialog, private orderService:OrderService) {
  }
  openDialog(){
    this.dialog.open(CreateOrderDialogComponent,{
      width:'30%'
    }).afterClosed().subscribe(value =>
    {
      if(value =='Add'){
        this.getOrders();
      }
    })
  }

  getOrders(){
    this.orderService.getAll().subscribe(
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editOrder(row:any){
    this.dialog.open(CreateOrderDialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(value =>
    {
      if(value =='update'){
        this.getOrders();
      }
    })
  }
  deleteOrder(id:number){
    this.orderService.deleteResource(id).subscribe({
      next:(res)=>{
        alert('Order Deleted Successfully');
        this.getOrders();
      },
      error:()=>{
        alert('Error while deleting an Order')
      }
    })
  }

  openDialogs(){
    this.dialog.open(CreateRequestDialogComponent,{
      width:'30%'
    })
  }


  ngOnInit(): void {
    this.getOrders();
  }
}

import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {OrderService} from "../../services/order/order.service";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-create-order-dialog',
  templateUrl: './create-order-dialog.component.html',
  styleUrls: ['./create-order-dialog.component.css']
})
export class CreateOrderDialogComponent implements OnInit{

  orderForm !:FormGroup;
  actionbtn:string="Add";
  constructor(private dialog:MatDialog,private formbuilder: FormBuilder, private orderservice:OrderService
    ,@Inject(MAT_DIALOG_DATA) public editData:any, private dialogRef: MatDialogRef<CreateOrderDialogComponent>) {

  }

  ngOnInit(): void {
    this.orderForm=this.formbuilder.group({
      client_name:['',Validators.required],
      phone_name:['',Validators.required],
      problem:['',Validators.required],
      components_to_use:['',Validators.required],
      value_progress:['',Validators.required],
      delivery_day:['',Validators.required],
      income:['',Validators.required],
    })
    if(this.editData){
      this.actionbtn="Update";
      this.orderForm.controls['client_name'].setValue(this.editData.client_name);
      this.orderForm.controls['phone_name'].setValue(this.editData.phone_name);
      this.orderForm.controls['problem'].setValue(this.editData.problem);
      this.orderForm.controls['components_to_use'].setValue(this.editData.components_to_use);
      this.orderForm.controls['value_progress'].setValue(this.editData.value_progress);
      this.orderForm.controls['delivery_day'].setValue(this.editData.delivery_day);
      this.orderForm.controls['income'].setValue(this.editData.income);
    }
  }

  addOrder(){
    if(!this.editData){
      if(this.orderForm.valid){
        this.orderservice.post(this.orderForm.value)
          .subscribe({
            next:(res)=>{
              alert("Order created successfully");
              this.orderForm.reset();
              this.dialogRef.close('Add');
            },
            error:()=>{
              alert("Error while adding the order")
            }
          })
      }
    }else {
      this.updateOrder()
    }

  }
  updateOrder(){
      this.orderservice.updateResource(this.orderForm.value,this.editData.id).subscribe(
        {
          next:(res)=>{
            alert("Order updated Successfully");
            this.orderForm.reset();
            this.dialogRef.close('update')
          },
          error:()=>{
            alert("Error while updating an Order")
          }
        }
      )
  }


}

import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RequestService} from "../../services/request/request.service";

@Component({
  selector: 'app-create-request-dialog',
  templateUrl: './create-request-dialog.component.html',
  styleUrls: ['./create-request-dialog.component.css']
})
export class CreateRequestDialogComponent implements OnInit{
  orderForm !:FormGroup;

  constructor(private dialog:MatDialog,private formbuilder: FormBuilder, private requestservice:RequestService
    ,@Inject(MAT_DIALOG_DATA) public editData:any, private dialogRef: MatDialogRef<CreateRequestDialogComponent>) {

  }

  ngOnInit(): void {
    this.orderForm=this.formbuilder.group({
      name:['',Validators.required],
      day:['',Validators.required],
      hour:['',Validators.required],
      cellphone:['',Validators.required],
      problem:['',Validators.required],
      specification:['',Validators.required],
    })
  }

  sendResquest(){
      if(this.orderForm.valid){
        this.requestservice.post(this.orderForm.value)
          .subscribe({
            next:(res)=>{
              alert("Order created successfully");
              this.orderForm.reset();
              this.dialogRef.close('Send');

            },
            error:()=>{
              alert("Error while adding the order")
            }
          })

      }
  }

}

import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";

import {Router} from "@angular/router";
import {SecurityService} from "../../services/security.service";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent {


  types: string[] = ["ROLE_TECHNICIAN","ROLE_USER"]
  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private securityService:SecurityService){
  }
  public registerForm: FormGroup = this.formBuilder.group({

    firstName: ['', {validators: [Validators.required], updatedOn: 'change'}],
    paternalSurname: ['', {validators: [Validators.required], updatedOn: 'change'}],
    maternalSurname: ['', {validators: [Validators.required], updatedOn: 'change'}],
    password: ['', {validators: [Validators.required], updatedOn: 'change'}],
    email: ['', {validators: [Validators.required], updatedOn: 'change'}],
    type: ['', {validators: [Validators.required], updatedOn: 'change'}],
  });

  addUser(){
    //this.newUser.id=0;

    if(this.registerForm.invalid)return;

      const newuser= {
        username: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value,
        roles:[this.registerForm.controls['type'].value]
      }


      //Agrega a la tabla tecnicos
      if(newuser.roles[0] =="ROLE_TECHNICIAN"){
        console.log("tecnico creado");

        console.log(newuser);
        this.securityService.signupUser(newuser).subscribe(response=>{
          console.log(response);

        })


        const newTechnician={
          name:this.registerForm.controls['firstName'].value,
          lastName:this.registerForm.controls['paternalSurname'].value+" "+this.registerForm.controls['maternalSurname'].value,
          phone:"000000000",
          address:"address",
          city:"city",
          experience:"experience",
          photo:"photo",
          email:newuser.username,
          password: newuser.password,
          description:"description",
        }

        this.securityService.signupTechnician(newTechnician).subscribe(response=>{
          console.log(response);
          this.router.navigate(['auth/login']);
        });

        //Agrega un usuario de tipo tecnico




      }else if(newuser.roles[0] == "ROLE_USER"){

        console.log(newuser);
        this.securityService.signupUser(newuser).subscribe(response=>{
          console.log(response);

        })
        this.router.navigate(['auth/login']);
      }




    console.log("=====")
    /*this.securityService.signinUser(this.newUser).subscribe(response=>{

    })

      this.registerForm.reset();

      */

  }


  get first_name() {
    return this.registerForm.get('firstName');
  }

  get paternal_surname() {
    return this.registerForm.get('paternalSurname');
  }

  get maternal_surname() {
    return this.registerForm.get('maternalSurname');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get type() {
    return this.registerForm.get('type');
  }

}

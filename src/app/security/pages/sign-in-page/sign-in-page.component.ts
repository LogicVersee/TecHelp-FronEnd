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
  private newUser: User|undefined;

  types: string[] = [
    "technical", "client"
  ]
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


    if(this.registerForm.invalid)return;/*
    this.newUser.email=this.registerForm.value.email;
    this.newUser.name=this.registerForm.value.firstName;
    this.newUser.password=this.registerForm.value.password;
    this.newUser.lastName=this.registerForm.value.paternalSurname + " " + this.registerForm.value.maternalSurname;
    this.newUser.role=this.registerForm.value.type;*/



    console.log(this.newUser);
    console.log("=====")
    /*this.securityService.signinUser(this.newUser).subscribe(response=>{

    })

      this.registerForm.reset();

      this.router.navigate(['security/login']);*/

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

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SecurityService} from "../../services/security.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public myform:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

  constructor(
              private router:Router,
              private fb:FormBuilder,
              private securityService:SecurityService) { }

  onLogin():void{
    console.log('Botón presionado');
    if(this.myform.invalid)return;
    //agregar servicio
    this.securityService.login(this.myform.controls['email'].value,this.myform.controls['password'].value)
      .subscribe(response =>{

        if(this.user?.role=="technical"){
          this.router.navigate([`home/technical`]);
        }else if(this.user?.role=="client"){
          this.router.navigate([`home/user`]);
        }

      });


  }
  get email(){
    return this.myform.get('email');
  }

  get password(){
    return this.myform.get('password')
  }
  get user():User|undefined{
    return this.securityService.currentUser;

  }


  ngOnInit(): void {
  }



}

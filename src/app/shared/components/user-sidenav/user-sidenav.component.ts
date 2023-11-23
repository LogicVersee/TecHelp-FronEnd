import {Component, computed, Input, signal} from '@angular/core';
import {SecurityService} from "../../../security/services/security.service";
import {User} from "../../../security/model/user";
import {Router} from "@angular/router";

export type MenuItem ={
  icon:string;
  label: string;
  route: string;

}
@Component({
  selector: 'app-user-sidenav',
  templateUrl: './user-sidenav.component.html',
  styleUrls: ['./user-sidenav.component.css']
})
export class UserSidenavComponent {
  constructor(private router: Router,
              private securityService:SecurityService,
              ) {}

  menuItems = signal<MenuItem[]>([
    {
      icon: "home",
      label:"Home",
      route:"home/user"
    },
    {
      icon: "engineering",
      label:"Technical",
      route:"home/user/technical"
    },
    {
      icon: "donut_large",
      label:"Progress",
      route:"user"
    },
    {
      icon: "star",
      label:"Favorite",
      route:"user"
    },
    {
      icon: "mail",
      label:"Inbox",
      route:"user"
    },
    {
      icon: "exit_to_app" ,
      label: "salir",
      route: "login"
    }

  ]);

  CambiarRuta(name:string):void{

    if(name=="login"){
      this.securityService.logout();
      this.router.navigate([`auth/${name}`]);
      console.log(name)
    }else{
      this.router.navigate([`${name}`]);
    }

  }

  get user():User|undefined{
    return this.securityService.currentUser;

  }
}

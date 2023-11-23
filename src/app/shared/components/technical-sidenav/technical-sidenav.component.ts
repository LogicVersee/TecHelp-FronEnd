import {Component, signal} from '@angular/core';
import {User} from "../../../security/model/user";
import {Router} from "@angular/router";
import {SecurityService} from "../../../security/services/security.service";

export type MenuItem ={
  icon:string;
  label: string;
  route: string;

}
@Component({
  selector: 'app-technical-sidenav',
  templateUrl: './technical-sidenav.component.html',
  styleUrls: ['./technical-sidenav.component.css']
})
export class TechnicalSidenavComponent {

  constructor(private router: Router,
              private securityService:SecurityService,
  ) {}

  menuItems = signal<MenuItem[]>([
    {
      icon: "home",
      label:"Home",
      route:"home/technical"
    },
    {
      icon: "person",
      label:"Profile",
      route:"profile/edit-technical"
    },
    {
      icon: "task",
      label:"Task",
      route:"user"
    },
    {
      icon: "dashboard",
      label:"Dashboard",
      route:"inventory/summary"
    },
    {
      icon: "mail",
      label:"Petition",
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
    } else{
      console.log(name)
      this.router.navigate([`${name}`]);
    }

  }

  get user():User|undefined{
    return this.securityService.currentUser;

  }
}

import { Component } from '@angular/core';
import {User} from "../../../security/model/user";
import {SecurityService} from "../../../security/services/security.service";

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  constructor(private securityService: SecurityService){
  }
  get user():User|undefined{
    return this.securityService.currentUser;

  }

}

import {Component, OnInit} from '@angular/core';
import {SecurityService} from "./security/services/security.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TecHelp-FrontEnd';
  constructor(private securityService:SecurityService){
  }

  ngOnInit(): void {
    this.securityService.checkStatus()
        .subscribe(()=>{
          console.log("Chequeando Autenticacion")
        })
  }
}


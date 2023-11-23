import { Component } from '@angular/core';
import {formatNumber} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {TechnicalsService} from "../../services/technicals.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-technical',
  templateUrl: './search-technical.component.html',
  styleUrls: ['./search-technical.component.css']
})
export class SearchTechnicalComponent {
  maxRating = 5;
  maxRatingArr:any = Array(this.maxRating).fill(0);
  techs:any;

  constructor(private router: Router,private technicalsService:TechnicalsService) {
    this.techs = [];
  }
  numberFunc(word: string): number{
    return Number(word);
  }

  private getAllTechnicals(){
    this.technicalsService.getAll().subscribe((response:any) => {
      this.techs = response;
      console.log(response)
    })
  }
  protected readonly formatNumber = formatNumber;

  ngOnInit(): void {
    this.getAllTechnicals();
  }

  TechnicianProfileRoute(id: any) {
    this.router.navigate([`home/user/profTechnical/${id}`])
  }
}

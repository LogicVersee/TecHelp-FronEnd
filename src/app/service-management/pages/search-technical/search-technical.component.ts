import { Component } from '@angular/core';
import {formatNumber} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {TechnicalsService} from "../../services/technicals.service";

@Component({
  selector: 'app-search-technical',
  templateUrl: './search-technical.component.html',
  styleUrls: ['./search-technical.component.css']
})
export class SearchTechnicalComponent {
  maxRating = 5;
  maxRatingArr:any = Array(this.maxRating).fill(0);
  techs:any;

  constructor(private technicalsService:TechnicalsService) {
    this.techs = [];
  }
  numberFunc(word: string): number{
    return Number(word);
  }

  private getAllTechnicals(){
    this.technicalsService.getAll().subscribe((response:any) => {
      this.techs = response;
    })
  }
  protected readonly formatNumber = formatNumber;

  ngOnInit(): void {
    this.getAllTechnicals();
  }
}

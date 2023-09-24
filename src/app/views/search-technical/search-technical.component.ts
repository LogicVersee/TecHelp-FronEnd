import { Component } from '@angular/core';
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-search-technical',
  templateUrl: './search-technical.component.html',
  styleUrls: ['./search-technical.component.css']
})
export class SearchTechnicalComponent {
  maxRating = 5;
  maxRatingArr:any = Array(this.maxRating).fill(0);
  numberFunc(word: string): number{
    return Number(word);
  }
  techs = [
    {
      "id": 1,
      "name": "Jose",
      "lastName": "Perez",
      "address": "Av. Bananos 456",
      "city": "Lima",
      "experience": "4 - 5 years",
      "photo":"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      "description": "Soy tecnicos desde hace 5 años y tengo un puesto en Surco",
      "ranking": "3",
      "favourite": "false"
    },
    {
      "id": 2,
      "name": "Pablo",
      "lastName": "Ramirez",
      "address": "Av. Moreras 789",
      "city": "Lima",
      "experience": "1 - 3 years",
      "photo":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      "description": "Soy tecnicos desde hace 4 años y tengo un puesto en La Victoria",
      "ranking": "4",
      "favourite": "false"
    }
  ]
  protected readonly formatNumber = formatNumber;
}

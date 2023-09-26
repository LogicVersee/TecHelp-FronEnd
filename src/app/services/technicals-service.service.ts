import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TechnicalsServiceService {
  baseUrl: string = 'http://localhost:3000';
  resourceEndpoint: string = '/technicals';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.resourcePath(), this.httpOptions);
  }

  getById(id:string) {
    return this.http.get(`${this.resourcePath()}/${id}`, this.httpOptions);
  }

  private resourcePath(): string {
    return `${this.baseUrl}${this.resourceEndpoint}`;
  }
}

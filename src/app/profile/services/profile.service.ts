import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService<boolean>{
  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint='/technicals';
  }

  getPerfilebyId(User:any){
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get<any>(`${this.baseUrl}${this.resourceEndpoint}/${User}`,{ headers: headers })
  }

}

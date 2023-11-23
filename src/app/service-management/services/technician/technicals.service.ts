import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TechnicalsService extends BaseService<boolean>{

  constructor(http:HttpClient) {
    super(http);
    this.baseUrl = 'http://localhost:8080/api/v1'
    this.resourceEndpoint='/technicals';
  }
}

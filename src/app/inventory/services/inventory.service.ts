import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InventoryService extends BaseService<boolean>{

  constructor(http:HttpClient) {
    super(http);
    this.baseUrl = 'https://techelp-center-platform.zeabur.app/api/v1'
    this.resourceEndpoint='/inventory'
  }
}

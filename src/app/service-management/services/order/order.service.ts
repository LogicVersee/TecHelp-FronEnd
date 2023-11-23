import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Order} from "../../models/order/order";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint='/order';
  }


}

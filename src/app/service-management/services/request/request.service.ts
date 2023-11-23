import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Request} from "../../models/request/request";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService extends BaseService<Request>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint='/request';
  }

}

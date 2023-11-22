import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";
import {User} from "../model/user";


@Injectable({
  providedIn: 'root'
})
export class SecurityService extends BaseService<boolean>{

  private userAndTechnical?:User;
  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint='/users';
  }

  get currentUser():User|undefined{
    if(!this.userAndTechnical) return undefined;
    //realizar un clone profundo version 17
    return structuredClone(this.userAndTechnical);
  }

  checkStatus():Observable<boolean>{

    if(!localStorage.getItem("token"))return of(false);
    const token = localStorage.getItem("token");
    return this.http.get<User>(`${this.baseUrl}${this.resourceEndpoint}/${token}`,this.httpOptions)
      .pipe(
        tap(user => this.userAndTechnical = user),
        map(user => !!user),
        catchError(err=>of(false))
      )
  }

  signinUser(user:User):Observable<boolean>{

    return this.http.post<User>(`${this.baseUrl}${this.resourceEndpoint}`,user,this.httpOptions)
      .pipe(
       tap(user=>this.userAndTechnical=user),
        map(()=>true)
      )

  }


  login(email:string,password:string):Observable<boolean>{
    //cambiar por un post
    return this.http.get<any>(`${this.baseUrl}${this.resourceEndpoint}/1`,this.httpOptions)
      .pipe(
        tap(response=>this.userAndTechnical= response),
        tap(response => localStorage.setItem('token',response.id)),
        map(()=>true)
      )

  }
  logout(){
    this.userAndTechnical=undefined;
    localStorage.clear();
  }
}

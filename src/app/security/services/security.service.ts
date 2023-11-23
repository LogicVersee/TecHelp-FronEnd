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
    this.resourceEndpoint='/authentication';
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

  signupUser(newuser:any):Observable<boolean>{

    return this.http.post<any>(`${this.baseUrl}${this.resourceEndpoint}/sign-up`,newuser,this.httpOptions)
      .pipe(
        tap(response=>console.log(response)),
        map(()=>true)
      )

  }
  signupTechnician(newuser:any):Observable<boolean>{
    return this.http.post<any>(`${this.baseUrl}${this.resourceEndpoint}/sign-up/technical`,newuser,this.httpOptions)
      .pipe(
        tap(response=>console.log(response)),
        map(()=>true)
      )
  }


  login(username:string,password:string):Observable<boolean>{
    //cambiar por un post
    const userCredentials = {username:username,password:password};
    return this.http.post<User>(`${this.baseUrl}${this.resourceEndpoint}/sign-in`, userCredentials,this.httpOptions )
      .pipe(
        tap(response=>this.userAndTechnical= response),
        tap(response => localStorage.setItem('token',response.token)),
        map(()=>true)
      )

  }
  logout(){
    this.userAndTechnical=undefined;
    localStorage.clear();
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {catchError, map,tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
public _usuario!:any

get usuario(){
  return this._usuario
}
  constructor(private http:HttpClient) { }

  login(objeto:Object){
const url='http://localhost:1337/auth/local'
const body=objeto
return this.http.post(url,body)
.pipe(
  tap ((resp:any)=>{
    console.log(resp)
    localStorage.setItem('token',resp.jwt)
    if(resp.user.confirmed) {
      this._usuario=resp.user.username
      console.log(this._usuario)
    }

  })
)
  }
  registrar(objeto:Object){
    const url='http://localhost:1337/users'
    const body=objeto
    return this.http.post(url,body)

  }
  validarToken(){
    const url="http://localhost:1337/users/me"
const headers=new HttpHeaders()
.set('Authorization' ,`Bearer ${localStorage.getItem('token')}`);
    return this.http.get( url,{headers}) 
    .pipe(
      map((resp:any)=>{
this._usuario=resp.username
        return true;
      }),
      catchError(err=>of(false))
    )
  }
  logout(){
    localStorage.removeItem('token')
  }
}

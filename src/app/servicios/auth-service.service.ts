import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = environment.serve + 'Usuario/';
  private isOpen: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  signUp(userObj: any) {

    return this.http.post<any>(`${this.baseUrl}Guardar`, userObj);

  }
  Login(loginObj: any) {

    return this.http.post<any>(`${this.baseUrl}IniciarSesion`, loginObj);

  }

  signout() {
    localStorage.clear();
    this.router.navigate(['Login']);
   // localStorage.removeItem('token');
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }



}

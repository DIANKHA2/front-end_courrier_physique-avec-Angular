import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categorie } from 'src/model/categorie';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  connexion(email: string, password: string) {
    return this.http.post(`${this.api}/auth/login`, { email, password });
  }

  inscription(
    email: string,
    password: string
  ) {
    return this.http.post(`${this.api}/auth/register`, {
      email,
      password,
    });
  }
  deconnexion() {
    return this.http.post(`${this.api}/auth/deconnexion`, {});
  }
}

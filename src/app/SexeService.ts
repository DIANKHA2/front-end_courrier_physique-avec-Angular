
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sexe } from '../model/Sexe';





@Injectable({
  providedIn: 'root',
})
export class SexeService {
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  newSexe(Sexe: any) {
    return this.http.post(`${this.api}/addSexe`,Sexe);
  }
  listSexe() {
    return this.http.get(`${this.api}/listSexe`);
  }
  updateSexe(id: number, Sexe: any) {
    return this.http.put(`${this.api}/updateSexe/${id}`, Sexe);
  }
  deleteSexe(id: number) {
    return this.http.delete(`${this.api}/deleteSexe/${id}`);
  }
  getSexeById(id: number) {
    return this.http.get(`${this.api}/getOneSexe/${id}`);
  }
}

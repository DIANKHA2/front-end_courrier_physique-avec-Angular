import { ETAT } from './../model/ETAT';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root',
})
export class EtatcourrierService {
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  newETAT(ETAT: any) {
    return this.http.post(`${this.api}/addETAT`, ETAT);
  }
  listETAT() {
    return this.http.get(`${this.api}/listETAT`);
  }
  updateETAT(id: number, ETAT: any) {
    return this.http.put(`${this.api}/updateETAT/${id}`,ETAT);
  }
  deleteETAT(id: number) {
    return this.http.delete(`${this.api}/deleteETAT/${id}`);
  }
  getETATById(id: number) {
    return this.http.get(`${this.api}/getOneETAT/${id}`);
  }
} 

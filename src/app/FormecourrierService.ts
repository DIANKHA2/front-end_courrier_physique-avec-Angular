import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Forme } from '../model/Forme';



@Injectable({
  providedIn: 'root',
})
export class FormecourrierService {
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  newForme(Forme: any) {
    return this.http.post(`${this.api}/addForme`, Forme);
  }
  listForme() {
    return this.http.get(`${this.api}/listForme`);
  }
  updateForme(id: number, Forme: any) {
    return this.http.put(`${this.api}/updateForme/${id}`, Forme);
  }
  deleteForme(id: number) {
    return this.http.delete(`${this.api}/deleteForme/${id}`);
  }
  getFormeById(id: number) {
    return this.http.get(`${this.api}/getOneForme/${id}`);
  }
}

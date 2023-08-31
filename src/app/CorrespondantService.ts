import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Correspondant } from '../model/Correspondant';


@Injectable({
  providedIn: 'root',
})
export class CorrespondantService {
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  newcorrespondant(Correspondant: any) {
    return this.http.post(`${this.api}/addcorrespondant`, Correspondant);
  }
  listcorrespondant() {
    return this.http.get(`${this.api}/listcorrespondant`);
  }
  updatecorrespondant(id: number, Correspondant: any) {
    return this.http.put(`${this.api}/updatecorrespondant/${id}`,Correspondant);
  }
  deletecorrespondant(id: number) {
    return this.http.delete(`${this.api}/deletecorrespondant/${id}`);
  }
  getcorrespondantById(id: number) {
    return this.http.get(`${this.api}/getOnecorrespondant/${id}`);
  }
  listcorrespondantreponse() {
    return this.http.get(`${this.api}/listcorrespondantservice`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { COURRIER } from '../model/COURRIER';


@Injectable({
  providedIn: 'root',
})
export class CourrierService {
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  newCOURRIER(COURRIER: any) {
    return this.http.post(`${this.api}/addCOURRIER`, COURRIER);
  }
  listCOURRIER() {
    return this.http.get(`${this.api}/listCOURRIER`);
  }
  updateCOURRIER(id: number, COURRIER: any) {
    return this.http.put(`${this.api}/updateCOURRIER/${id}`,COURRIER);
  }
  deleteCOURRIER(id: number) {
    return this.http.delete(`${this.api}/deleteCOURRIER/${id}`);
  }
  getCOURRIERById(id: number) {
    return this.http.get(`${this.api}/getOneCOURRIER/${id}`);
  }
  //listcorrespondantreponse() {
   // return this.http.get(`${this.api}/listcorrespondantservice`);
  //}
}

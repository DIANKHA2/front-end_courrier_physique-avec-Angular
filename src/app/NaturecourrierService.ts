

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Nature_Courrier } from '../model/Nature_Courrier';



@Injectable({
  providedIn: 'root',
})
export class NaturecourrierService {
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  newNature_Courrier(Nature_Courrier: any) {
    return this.http.post(`${this.api}/addNature_Courrier`, Nature_Courrier);
  }
  listNature_Courrier() {
    return this.http.get(`${this.api}/listNature_Courrier`);
  }
 updateNature_Courrier(id: number, Nature_Courrier: any) {
    return this.http.put(`${this.api}/updateNature_Courrier/${id}`, Nature_Courrier);
  }
  deleteNature_Courrier(id: number) {
    return this.http.delete(`${this.api}/deleteNature_Courrier/${id}`);
  }
  getNature_CourrierById(id: number) {
    return this.http.get(`${this.api}/getOneNature_Courrier/${id}`);
  }
}

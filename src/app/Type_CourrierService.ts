import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Type_Courrier } from '../model/Type_Courrier';

@Injectable({
  providedIn: 'root',
})
export class TypecourrierService {
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  newtypecour(Type_Courrier: any) {
    return this.http.post(`${this.api}/addtypecour`, Type_Courrier);
  }
  listtypecour() {
    return this.http.get(`${this.api}/listtypecour`);
  }
  updatetypecour(id: number, Type_Courrier: any) {
    return this.http.put(`${this.api}/updatetypecour/${id}`, Type_Courrier);
  }
  deletetypecour(id: number) {
    return this.http.delete(`${this.api}/deletetypecour/${id}`);
  }
  gettypecourById(id: number) {
    return this.http.get(`${this.api}/getOnetypecour/${id}`);
  }
}

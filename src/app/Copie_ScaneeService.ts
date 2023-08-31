import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Copie_Scanee } from '../model/Copie_Scanee';



@Injectable({
  providedIn: 'root',
})
export class Copie_ScanneService {
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  newCopie_Scanee(Copie_Scanee: any) {
    return this.http.post(`${this.api}/addCopie_Scanee`, Copie_Scanee);
  }
  listCopie_Scanee() {
    return this.http.get(`${this.api}/listCopie_Scanee`);
  }
  updateCopie_Scanee(id: number, Copie_Scanee: any) {
    return this.http.put(`${this.api}/updateCopie_Scanee/${id}`,Copie_Scanee);
  }
  deleteCopie_Scanee(id: number) {
    return this.http.delete(`${this.api}/deleteCopie_Scanee/${id}`);
  }
  getCopie_ScaneeById(id: number) {
    return this.http.get(`${this.api}/getOneCopie_Scanee/${id}`);
  }
}

import { SERVICE } from './../model/SERVICE';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SERVICEService {
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  newSERVICE(SERVICE: any) {
    return this.http.post(`${this.api}/addSERVICE`, SERVICE);
  }
  listSERVICE() {
    return this.http.get(`${this.api}/listSERVICE`);
  }
  updateSERVICE(id: number, SERVICE: any) {
    return this.http.put(`${this.api}/updateSERVICE/${id}`, SERVICE);
  }
  deleteSERVICE(id: number) {
    return this.http.delete(`${this.api}/deleteSERVICE/${id}`);
  }
  getSERVICEById(id: number) {
    return this.http.get(`${this.api}/getOneSERVICE/${id}`);
  }
}

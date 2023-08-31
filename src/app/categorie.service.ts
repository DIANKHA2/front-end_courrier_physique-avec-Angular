import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categorie } from 'src/model/categorie';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  addCategorie(Categorie: any) {
    return this.http.post(`${this.api}/addCategorie`, Categorie);
  }
  getAllCategories() {
    return this.http.get(`${this.api}/listCategorie`);
  }
  updateCategorie(id: number, categorie: any) {
    return this.http.put(`${this.api}/updateCategorie/${id}`, categorie);
  }
  deleteCategorie(id: number) {
    return this.http.delete(`${this.api}/deleteCategorie/${id}`);
  }
  getOneCategorie(id: number) {
    return this.http.get(`${this.api}/getOneCategorie/${id}`);
  }
}

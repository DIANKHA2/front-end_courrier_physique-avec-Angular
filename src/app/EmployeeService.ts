import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/Employee';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  newEmployee(Employee: any) {
    return this.http.post(`${this.api}/addEmployee`, Employee);
  }
  listEmployee() {
    return this.http.get(`${this.api}/listEmployee`);
  }
  updateEmployee(id: number, Employee: any) {
    return this.http.put(`${this.api}/updateEmployee/${id}`,Employee);
  }
  deleteEmployee(id: number) {
    return this.http.delete(`${this.api}/deleteEmployee/${id}`);
  }
  getEmployeeById(id: number) {
    return this.http.get(`${this.api}/getOneEmployee/${id}`);
  }
  listEmployeereponse() {
    return this.http.get(`${this.api}/listEmployeeservice`);
  }

  nomemployee(nom: string) {
    let params = new HttpParams().set('filter', nom);
    return this.http.get(`${this.api}/nomemployee`,{params:params});
  }
}

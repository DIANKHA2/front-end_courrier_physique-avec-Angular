import { Component , OnInit} from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { SERVICE } from 'src/model/SERVICE';
import { Sexe } from 'src/model/Sexe';
import { SERVICEService } from '../SERVICEService';
import { SexeService } from '../SexeService';
import { EmployeeService } from '../EmployeeService';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  listsexe : Sexe[]= [];
  listservice: SERVICE[] = [];
  



  employeeForm = this.fb.group({
    matricule: ['', Validators.required],
    nom: ['', Validators.required],
    fonction: ['', Validators.required],
    cin: ['', Validators.required],
    address: ['', Validators.required],
    datenaissance: ['', Validators.required],
    sexe: ['', Validators.required],
    service: ['', Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private SERVICEService: SERVICEService,
    private SexeService: SexeService,
    private EmployeeService: EmployeeService

  ) { }

  ngOnInit(): void {
    this.getAllSERVICE();
    this.getAllSexe();
  }

getAllSERVICE() {
    this.SERVICEService.listSERVICE().subscribe({
      next: (data: any) => {
        this.listservice = data;
      },
      error: (err) => {},
    });
  }

  getAllSexe() {
    this.SexeService.listSexe().subscribe({
      next: (data: any) => {
        this.listsexe = data;
      },
      error: (err) => {},
    });
  }

  


  onSubmit() {
    const datas = {
     matricule : this.employeeForm.get("matricule")?.value,
      nom : this.employeeForm.get("nom")?.value,
      fonction : this.employeeForm.get("fonction")?.value,
      cin: this.employeeForm.get("cin")?.value,
      address: this.employeeForm.get("address")?.value,
      datenaissance: this.employeeForm.get("datenaissance")?.value,
      sexe: {
        id: this.employeeForm.get("sexe")?.value,

            },
      service : {
        id: this.employeeForm.get("service")?.value,

            }
    }
    this.EmployeeService.newEmployee(datas)
      .subscribe((data: any) => { console.log(datas); });
  }

}

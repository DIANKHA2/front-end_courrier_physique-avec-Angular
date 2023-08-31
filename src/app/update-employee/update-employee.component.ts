import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SERVICE } from 'src/model/SERVICE';
import { Sexe } from 'src/model/Sexe';
import { EmployeeService } from '../EmployeeService';
import { SERVICEService } from '../SERVICEService';
import { SexeService } from '../SexeService';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  idEmployee: any;
  listsexe : Sexe[]= [];
  listservice: SERVICE[] = [];
  selectedOptionsexe !: Number;
  selectedOptionservice !: Number;

  employeeForm = this.fb.group({
    matricule: ['', Validators.required],
    nom: ['', Validators.required],
    fonction: ['', Validators.required],
    cin: ['', Validators.required],
    address: ['', Validators.required],
    datenaissance: ['', Validators.required],
    sexe: ['', Validators.required],
    service: ['', Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private EmployeeService: EmployeeService,
    private fb: FormBuilder,
    private router: Router,
    private SERVICEService : SERVICEService,
    private SexeService : SexeService,
  ) {}
  ngOnInit() {
    this.idEmployee = this.route.snapshot.params['id'];
    this.EmployeeService.getEmployeeById(this.idEmployee)
      .subscribe((data: any) => {
        this.employeeForm.controls['matricule'].setValue(data.matricule);
        this.employeeForm.controls['nom'].setValue(data.nom);
        this.employeeForm.controls['fonction'].setValue(data.fonction);
        this.employeeForm.controls['cin'].setValue(data.cin);
        this.employeeForm.controls['address'].setValue(data.address);
        this.employeeForm.controls['datenaissance'].setValue(data.datenaissance);
        this.employeeForm.controls['sexe'].setValue(data.sexe.genre); 
        this.employeeForm.controls['service'].setValue(data.service.nom);
        this.selectedOptionsexe = data.sexe.id;
        this.selectedOptionservice = data.service.id;
        console.log(this.selectedOptionservice)
      });
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



    this.EmployeeService.updateEmployee
    (this.idEmployee, datas)
      .subscribe((data: any) => {
        console.log(datas);
        this.router.navigateByUrl('/Employee');
      });
  }
}


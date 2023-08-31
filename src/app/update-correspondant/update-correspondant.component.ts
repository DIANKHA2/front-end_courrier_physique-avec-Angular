import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SERVICE } from 'src/model/SERVICE';
import { Sexe } from 'src/model/Sexe';
import { CorrespondantService } from '../CorrespondantService';
import { SERVICEService } from '../SERVICEService';
import { SexeService } from '../SexeService';

@Component({
  selector: 'app-update-correspondant',
  templateUrl: './update-correspondant.component.html',
  styleUrls: ['./update-correspondant.component.css']
})
export class UpdateCorrespondantComponent implements OnInit {
  idCorrespondant: any;
  listsexe : Sexe[]= [];
  listservice: SERVICE[] = [];
  selectedOptionsexe !: Number;
  selectedOptionservice !: Number;


  correspondantForm = this.fb.group({
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
    private CorrespondantService:CorrespondantService,
    private fb: FormBuilder,
    private router: Router,
    private SERVICEService : SERVICEService,
    private  SexeService : SexeService,
  ) {}
  ngOnInit() {
    this.idCorrespondant = this.route.snapshot.params['id'];
    this.CorrespondantService.getcorrespondantById(this.idCorrespondant)
      .subscribe((data: any) => {
        this.correspondantForm.controls['matricule'].setValue(data.matricule);
        this.correspondantForm.controls['nom'].setValue(data.nom);
        this.correspondantForm.controls['fonction'].setValue(data.fonction);
        this.correspondantForm.controls['cin'].setValue(data.cin);
        this.correspondantForm.controls['address'].setValue(data.address);
        this.correspondantForm.controls['datenaissance'].setValue(data.datenaissance);
        this.correspondantForm.controls['sexe'].setValue(data.sexe.genre);
        this.correspondantForm.controls['service'].setValue(data.service.nom);
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
     matricule : this.correspondantForm.get("matricule")?.value,
      nom : this.correspondantForm.get("nom")?.value,
      fonction : this.correspondantForm.get("fonction")?.value,
      cin: this.correspondantForm.get("cin")?.value,
      address: this.correspondantForm.get("address")?.value,
      datenaissance: this.correspondantForm.get("datenaissance")?.value,
      sexe: {
        id: this.correspondantForm.get("sexe")?.value,

            },
      service : {
        id: this.correspondantForm.get("service")?.value,

            }
    }


    this.CorrespondantService.updatecorrespondant
    (this.idCorrespondant, datas)
      .subscribe((data: any) => {
        console.log(datas);
        this.router.navigateByUrl('/correspondant');
      });
  }
}


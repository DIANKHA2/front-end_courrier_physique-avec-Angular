import { Component , OnInit} from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { SERVICE } from 'src/model/SERVICE';
import { Sexe } from 'src/model/Sexe';
import { CorrespondantService } from '../CorrespondantService';
import { SERVICEService } from '../SERVICEService';
import { SexeService } from '../SexeService';
@Component({
  selector: 'app-add-correspondant',
  templateUrl: './add-correspondant.component.html',
  styleUrls: ['./add-correspondant.component.css']
})
export class AddCorrespondantComponent implements OnInit {
  listsexe : Sexe[]= [];
  listservice: SERVICE[] = [];


  correspondantForm = this.fb.group({
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
    private CorrespondantService:CorrespondantService

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
    this.CorrespondantService.newcorrespondant(datas)
      .subscribe((data: any) => { console.log(datas); });
  }

}

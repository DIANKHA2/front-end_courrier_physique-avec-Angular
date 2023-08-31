import { Component,OnInit } from '@angular/core';
import {FormBuilder, Validators,FormGroup, FormControl} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Copie_Scanee } from '../../model/Copie_Scanee';
import { Type_Courrier } from '../../model/Type_Courrier';
import { Nature_Courrier } from '../../model/Nature_Courrier';
import { Forme } from '../../model/Forme';
import { ETAT } from '../../model/ETAT';
import { Copie_ScanneService } from '../Copie_ScaneeService';
import { TypecourrierService } from '../Type_CourrierService';
import { NaturecourrierService } from '../NaturecourrierService';
import { FormecourrierService } from '../FormecourrierService';
import { EtatcourrierService } from '../EtatcourrierService';
import { Employee } from 'src/model/Employee';
import { EmployeeService } from '../EmployeeService';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-courrier',
  templateUrl: './add-courrier.component.html',
  styleUrls: ['./add-courrier.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class AddCOURRIERComponent implements OnInit {
  listcopieScanee : Copie_Scanee[]= [];
  listtypecourrier: Type_Courrier[] = [];
  listnaturecourrier : Nature_Courrier[]= [];
  listforme: Forme[] = [];
  listetat: ETAT[] = [];
  listnomemployee: Employee[] = [];
  Enregister = this._formBuilder.group({

    f1: this._formBuilder.group({
      ref: ['', Validators.required],
      date: ['', Validators.required],
      copieScanee: ['', Validators.required],
      typecourrier: ['', Validators.required],
      naturecourrier: ['', Validators.required],
      forme: ['', Validators.required],
      etat: ['', Validators.required],
    }),
    f2 :this._formBuilder.group({
      objet: ['', Validators.required],
      employee: ['', Validators.required],
    }),

    f3 : this._formBuilder.group({
      correspondant: ['', Validators.required],
      fax: ['', Validators.required],
      typefax: ['', Validators.required],
      details: ['', Validators.required],
    })


  });

  
  constructor(private _formBuilder: FormBuilder,
              private Copie_ScanneService: Copie_ScanneService,
              private TypecourrierService: TypecourrierService,
              private NaturecourrierService: NaturecourrierService,
              private FormecourrierService: FormecourrierService,
    private EtatcourrierService: EtatcourrierService,
    private EmployeeService:EmployeeService) { }
  isLinear = true;
  
  ngOnInit(): void {
    this.getAllCopie_Scanne();
    this.getAlltypecour();
    this.getAllNaturecourrier();
    this.getAllFormecourrier();
    this.getAllEtat();
  }


getAllCopie_Scanne() {
    this.Copie_ScanneService.listCopie_Scanee().subscribe({
      next: (data: any) => {
        this.listcopieScanee = data;
      },
      error: (err) => {},
    });
}
  
getAlltypecour() {
    this.TypecourrierService.listtypecour()
    .subscribe({
      next: (data: any) => {
        this.listtypecourrier = data;
      },
      error: (err) => {},
    });
}
  
getAllNaturecourrier() {
    this.NaturecourrierService.listNature_Courrier().subscribe({
      next: (data: any) => {
        this.listnaturecourrier = data;
      },
      error: (err) => {},
    });
}
  
getAllFormecourrier() {
    this.FormecourrierService.listForme().subscribe({
      next: (data: any) => {
        this.listforme = data;
      },
      error: (err) => {},
    });
}
  
getAllEtat() {
    this.EtatcourrierService.listETAT().subscribe({
      next: (data: any) => {
        this.listetat = data;
      },
      error: (err) => {},
    });
}

nomemployees(nom:string){
  this.EmployeeService.nomemployee(nom).subscribe({
      next: (data: any) => {
        this.listnomemployee =data;
      },
       error: (err: string) => {},
    });
    }
  
get f1form(){
    return this.Enregister.get("f1") as FormGroup;
  }
  get f2form(){
    return this.Enregister.get("f2") as FormGroup;
  }
  get f3form(){
    return this.Enregister.get("f3") as FormGroup;
  }
  HandleSubmit(){
    if(this.Enregister.valid){
      
      const datas = {
         f1 : {
             ref: this.Enregister.get("f1")?.value,
             date: this.Enregister.get("f1")?.value,
             copieScanee: {id:this.Enregister.get("f1")?.value,},
             typecourrier: {id:this.Enregister.get("f1")?.value,},
             naturecourrier: {id:this.Enregister.get("f1")?.value,},
             forme: {id:this.Enregister.get("f1")?.value,},
             etat: {id:this.Enregister.get("f1")?.value,}
             },
         f2 : {
             objet:this.Enregister.get("f2")?.value,
             employee: {id:this.Enregister.get("f2")?.value,}

             },
          f3 : {
             correspondant: {id:this.Enregister.get("f3")?.value,},
             fax: this.Enregister.get("f3")?.value,
             typefax: this.Enregister.get("f3")?.value,
             details: this.Enregister.get("f3")?.value
             }
    }
    console.log(datas);
   }
  }

}


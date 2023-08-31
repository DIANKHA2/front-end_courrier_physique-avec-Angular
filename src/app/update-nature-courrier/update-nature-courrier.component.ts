import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NaturecourrierService } from '../NaturecourrierService';

@Component({
  selector: 'app-update-nature-courrier',
  templateUrl: './update-nature-courrier.component.html',
  styleUrls: ['./update-nature-courrier.component.css']
})
export class UpdateNatureCourrierComponent implements OnInit {
  idNaTure: any; 
  nAtureForm = this.fb.group({
    nature: ['', Validators.required],
  });
  constructor(
    private route: ActivatedRoute,
    private NaturecourrierService: NaturecourrierService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.idNaTure = this.route.snapshot.params['id'];
    this.NaturecourrierService.getNature_CourrierById(this.idNaTure)
      .subscribe((data: any) => {
        this.nAtureForm.controls['nature'].setValue(data.nature);
         console.log(data)
      });
  }
  onSubmit() {
    this.NaturecourrierService.updateNature_Courrier
    (this.idNaTure, this.nAtureForm.value)
      .subscribe((data: any) => {
        this.router.navigateByUrl('/Naturecourrier');
      });
  }
}

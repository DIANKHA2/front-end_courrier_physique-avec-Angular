import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EtatcourrierService } from '../EtatcourrierService';

@Component({
  selector: 'app-update-etat',
  templateUrl: './update-etat.component.html',
  styleUrls: ['./update-etat.component.css']
})
export class UpdateETATComponent implements OnInit {
  idEtat: any;
  EtAtForm = this.fb.group({
  nature_etat: ['', Validators.required],
  });
  constructor(
    private route: ActivatedRoute,
    private EtatcourrierService: EtatcourrierService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.idEtat = this.route.snapshot.params['id'];
    this.EtatcourrierService.getETATById(this.idEtat)
      .subscribe((data: any) => {
        this.EtAtForm.controls['nature_etat'].setValue(data.nature_etat);
      });
  }
  onSubmit() {
    this.EtatcourrierService.updateETAT
    (this.idEtat, this.EtAtForm.value)
      .subscribe((data: any) => {
        this.router.navigateByUrl('/Etat');
      });
  }
}


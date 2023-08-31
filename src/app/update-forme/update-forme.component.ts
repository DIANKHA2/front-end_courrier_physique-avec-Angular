import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormecourrierService } from '../FormecourrierService';

@Component({
  selector: 'app-update-forme',
  templateUrl: './update-forme.component.html',
  styleUrls: ['./update-forme.component.css']
})
export class UpdateFormeComponent implements OnInit {
  idForme: any;
  fOrMeForm = this.fb.group({
    forme_courrier: ['', Validators.required],
  });
  constructor(
    private route: ActivatedRoute,
    private FormecourrierService: FormecourrierService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.idForme = this.route.snapshot.params['id'];
    this.FormecourrierService.getFormeById(this.idForme)
      .subscribe((data: any) => {
        this.fOrMeForm.controls['forme_courrier'].setValue(data.forme_courrier);
      });
  }
  onSubmit() {
    this.FormecourrierService.updateForme
    (this.idForme, this.fOrMeForm.value)
      .subscribe((data: any) => {
        this.router.navigateByUrl('/Formecourrier');
      });
  }
}


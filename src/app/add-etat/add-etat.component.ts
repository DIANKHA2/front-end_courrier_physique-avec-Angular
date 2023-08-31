import { Component } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { EtatcourrierService } from '../EtatcourrierService';

@Component({
  selector: 'app-add-etat',
  templateUrl: './add-etat.component.html',
  styleUrls: ['./add-etat.component.css']
})
export class AddETATComponent {
 etat = this.fb.group({
    nature_etat: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private EtatcourrierService: EtatcourrierService
  ) {}

  onSubmit() {
    this.EtatcourrierService.newETAT(this.etat.value)
      .subscribe((data: any) => {});
  }
}

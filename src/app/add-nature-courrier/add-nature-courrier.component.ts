import { Component } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { NaturecourrierService } from '../NaturecourrierService';

@Component({
  selector: 'app-add-nature-courrier',
  templateUrl: './add-nature-courrier.component.html',
  styleUrls: ['./add-nature-courrier.component.css']
})
export class AddNatureCourrierComponent {
 nat = this.fb.group({
    nature: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private NaturecourrierService: NaturecourrierService
  ) {}

  onSubmit() {
    this.NaturecourrierService.newNature_Courrier(this.nat.value).subscribe((data: any) => {});
  }
}


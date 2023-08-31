import { Component } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { FormecourrierService } from '../FormecourrierService';
@Component({
  selector: 'app-add-forme',
  templateUrl: './add-forme.component.html',
  styleUrls: ['./add-forme.component.css']
})
export class AddFormeComponent {
 forme = this.fb.group({
    forme_courrier: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private   FormecourrierService: FormecourrierService
  ) {}

  onSubmit() {
    this.FormecourrierService.newForme(this.forme.value)
      .subscribe((data: any) => {});
  }
}

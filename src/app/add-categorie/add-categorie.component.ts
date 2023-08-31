import { Component } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css'],
})
export class AddCategorieComponent {
  categorie = this.fb.group({
    code: ['', Validators.required],
    libelle: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private categorieService: CategorieService
  ) {}

  onSubmit() {
    this.categorieService
      .addCategorie(this.categorie.value)
      .subscribe((data: any) => {});
  }
}

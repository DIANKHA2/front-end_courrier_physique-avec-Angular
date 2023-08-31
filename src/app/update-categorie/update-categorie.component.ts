import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css'],
})
export class UpdateCategorieComponent implements OnInit {
  idCategorie: any;
  categorieForm = this.fb.group({
    code: ['', Validators.required],
    libelle: ['', Validators.required],
  });
  constructor(
    private route: ActivatedRoute,
    private categorieService: CategorieService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.idCategorie = this.route.snapshot.params['id'];
    this.categorieService
      .getOneCategorie(this.idCategorie)
      .subscribe((data: any) => {
        this.categorieForm.controls['code'].setValue(data.code);
        this.categorieForm.controls['libelle'].setValue(data.libelle);
      });
  }
  onSubmit() {
    this.categorieService
      .updateCategorie(this.idCategorie, this.categorieForm.value)
      .subscribe((data: any) => {
        this.router.navigateByUrl('/categorie');
      });
  }
}

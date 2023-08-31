import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypecourrierService } from '../Type_CourrierService';
@Component({
  selector: 'app-update-type-courrier',
  templateUrl: './update-type-courrier.component.html',
  styleUrls: ['./update-type-courrier.component.css']
})
export class UpdateTypeCourrierComponent implements OnInit {
  idTypecourrier: any;
  typecourrierFORM = this.fb.group({
    type: ['', Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private TypecourrierService: TypecourrierService,
    private fb: FormBuilder, 
    private router: Router
  ) {}


  ngOnInit(): void {
    this.idTypecourrier = this.route.snapshot.params['id'];
    this.TypecourrierService.gettypecourById(this.idTypecourrier)
      .subscribe((data: any) => {
        this.typecourrierFORM.controls['type'].setValue(data.type);
        console.log(data)
      });
  }

  onSubmit() {
    this.TypecourrierService.updatetypecour(this.idTypecourrier, this.typecourrierFORM.value)
      .subscribe((data: any) => {
        this.router.navigateByUrl('/typecourrier');
       });
  }

}

import { Component } from '@angular/core';
import { FormBuilder, RequiredValidator,Validators } from '@angular/forms';
import { TypecourrierService } from '../Type_CourrierService';

@Component({
  selector: 'app-add-type-courrier',
  templateUrl: './add-type-courrier.component.html',
  styleUrls: ['./add-type-courrier.component.css']
})
export class AddTypeCourrierComponent {
  typecourrierForm = this.fb.group({
    type: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private TypecourrierService: TypecourrierService,
  ) { }

  onSubmit() {
    this.TypecourrierService.newtypecour(this.typecourrierForm.value)
      .subscribe((data: any) => { console.log(data) });
  }

}

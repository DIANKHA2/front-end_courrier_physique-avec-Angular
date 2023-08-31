import { Component } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { SexeService } from '../SexeService';

@Component({
  selector: 'app-add-sexe',
  templateUrl: './add-sexe.component.html',
  styleUrls: ['./add-sexe.component.css']
})
export class AddSexeComponent { 
 sexe = this.fb.group({
    genre: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private SexeService: SexeService
  ) {}

  onSubmit() {
    this.SexeService.newSexe(this.sexe.value)
      .subscribe((data: any) => {});
  }
}



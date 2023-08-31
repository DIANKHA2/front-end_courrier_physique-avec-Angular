import { Component } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Copie_ScanneService } from '../Copie_ScaneeService';

@Component({
  selector: 'app-add-copie-scanee',
  templateUrl: './add-copie-scanee.component.html',
  styleUrls: ['./add-copie-scanee.component.css']
})
export class AddCopieScaneeComponent {
  copiescanneForm = this.fb.group({
    copie: ['', Validators.required],
    commentaire: ['', Validators.required],
    date: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private Copie_ScanneService: Copie_ScanneService
  ) {}

  onSubmit()
  {
    const datas = {
      copie : this.copiescanneForm.get("copie")?.value,
      commentaire : this.copiescanneForm.get("commentaire")?.value,
      date : this.copiescanneForm.get("date")?.value
    }
    this.Copie_ScanneService.newCopie_Scanee(datas)
      .subscribe((data: any) => { console.log(datas); });
  }
}



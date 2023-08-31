import { Component } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { SERVICEService } from '../SERVICEService';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  serviceForm = this.fb.group({
    nom: ['', Validators.required],
   
  });
  constructor(
    private fb: FormBuilder,
    private SERVICEService: SERVICEService
  ) {}

  onSubmit() {
    this.SERVICEService.newSERVICE(this.serviceForm.value)
      .subscribe((data: any) => {});
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SERVICEService } from '../SERVICEService';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  idservice: any;
  serviceForm = this.fb.group({
    nom: ['', Validators.required],

  });
  constructor(
    private route: ActivatedRoute,
    private SERVICEService: SERVICEService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.idservice = this.route.snapshot.params['id'];
    this.SERVICEService.getSERVICEById(this.idservice)
      .subscribe((data: any) => {
        this.serviceForm.controls['nom'].setValue(data.nom);
       
      });
  }
  onSubmit() {
    this.SERVICEService.updateSERVICE
    (this.idservice, this.serviceForm.value)
      .subscribe((data: any) => {
        this.router.navigateByUrl('/SERVICE');
      });
  }
}

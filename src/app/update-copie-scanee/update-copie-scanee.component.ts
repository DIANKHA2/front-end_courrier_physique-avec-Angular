import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Copie_ScanneService } from '../Copie_ScaneeService';

@Component({
  selector: 'app-update-copie-scanee',
  templateUrl: './update-copie-scanee.component.html',
  styleUrls: ['./update-copie-scanee.component.css']
})
export class UpdateCopieScaneeComponent implements OnInit {
  idcopiescanne: any;
   copiescanneForm = this.fb.group({
    copie: ['', Validators.required],
    commentaire: ['', Validators.required],
    date: ['', Validators.required],
  });
  constructor(
    private route: ActivatedRoute,
    private Copie_ScanneService: Copie_ScanneService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.idcopiescanne = this.route.snapshot.params['id'];
    this.Copie_ScanneService.getCopie_ScaneeById(this.idcopiescanne)
      .subscribe((data: any) => {
        this.copiescanneForm.controls['copie'].setValue(data.copie);
        this.copiescanneForm.controls['commentaire'].setValue(data.commentaire);
        this.copiescanneForm.controls['date'].setValue(data.date);

      });
  }
  onSubmit() {
    this.Copie_ScanneService.updateCopie_Scanee
    (this.idcopiescanne, this.copiescanneForm.value)
      .subscribe((data: any) => {
        this.router.navigateByUrl('/Copie_Scanne');
      });
  }
}

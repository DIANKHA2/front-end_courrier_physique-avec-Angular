import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SexeService } from '../SexeService';

@Component({
  selector: 'app-update-sexe',
  templateUrl: './update-sexe.component.html',
  styleUrls: ['./update-sexe.component.css']
})
export class UpdateSexeComponent implements OnInit {
  idSexe: any;
  sexeForm = this.fb.group({
    genre: ['', Validators.required],
  });
  constructor(
    private route: ActivatedRoute, 
    private SexeService: SexeService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.idSexe = this.route.snapshot.params['id'];
    this.SexeService.getSexeById(this.idSexe)
      .subscribe((data: any) => {
        this.sexeForm.controls['genre'].setValue(data.genre);
      });
  }
  onSubmit() {
    this.SexeService.updateSexe
    (this.idSexe, this.sexeForm.value)
      .subscribe((data: any) => {
        this.router.navigateByUrl('/sexe');
      });
  }
}

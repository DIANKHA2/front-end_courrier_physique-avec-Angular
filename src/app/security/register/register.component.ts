import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
  };
  isRegister = false;
  isRegisterFaled = false;
  errorMessage = '';
  public aldiana !: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const {email, password } = this.form;
    this.authService
      .inscription(email, password)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.aldiana=email
          console.log(this.aldiana),

          this.isRegister = true;
          this.isRegisterFaled = false;
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isRegisterFaled = false;
        },
      });
  }
}

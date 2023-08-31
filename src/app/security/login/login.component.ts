import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { StorageService } from 'src/app/storage.service';
import { User } from '../../../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
  };
  isLogin = false;
  isLoginFaled = false;
  errorMessage = '';
  roles: string[] = [];
  public aldiana !: string;
  currentuser!: User
  

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLogin()) {
      this.isLogin = true;
      this.roles = this.storageService.getUser().roles;
      console.log(this.aldiana)
      this.currentuser = this.storageService.getUser()
       console.log(this.currentuser)
    }
  }

  onSubmit() {
    const { email, password } = this.form;
    this.authService.connexion(email, password).subscribe({
      next: (data: any) => {
        this.storageService.saveUser(data);
        this.isLoginFaled = false;
        this.isLogin = true;
        this.roles = this.storageService.getUser().roles;
        console.log(this.roles)
        this.aldiana=email
        console.log(this.storageService.getUser().email),
          this.reloadPage();
        this.currentuser = data;


      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFaled = true;
      },
    });
  }

  reloadPage() {
    window.location.reload();
    this.router.navigateByUrl('/home');
  }

  isAdmin() {
    if (this.storageService.getUser().roles.equals("ADMIN")) {
      return false;
    }
      else {
      return true;
    }
  }
}

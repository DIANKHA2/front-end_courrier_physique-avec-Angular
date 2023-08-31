import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isLogin = false;
  showMenu = false;
  roles: string[] = [];
  email?: string;
  myImage:string="assets/images/icon.jpg";

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  goHome() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
    this.isLogin = this.storageService.isLogin();
    if (this.isLogin) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showMenu = this.roles.includes('ROLE_USER');
      this.email = user.email;
      console.log(this.email)
    }
  }
}

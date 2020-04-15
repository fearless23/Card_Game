import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService, User } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;
  menuActive = false;
  constructor(private userSrv: UserService, private loginSrv: LoginService) {}

  ngOnInit() {
    this.user$ = this.userSrv.user$;
  }

  onClickOutside(event: object) {
    this.menuActive = false;
  }

  logout() {
    this.loginSrv.logout();
  }

  toggleMenuActive() {
    this.menuActive = !this.menuActive;
  }
}

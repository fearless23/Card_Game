import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { AlertsService, AlertTypeEnum } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userName: String;
  menuActive = false;
  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private alertService: AlertsService
  ) {}

  ngOnInit() {
    this.userService.user.subscribe((user) => {
      if (user) {
        this.userName = user.displayName;
      }
    });
  }

  onClickOutside(event: Object) {
    this.menuActive = false;
  }

  logout() {
    this.loginService.logout();
  }

  toggleMenuActive() {
    this.menuActive = !this.menuActive;
  }

  aa() {
    const randNum = Math.floor(Math.random() * 4);
    const randType = <AlertTypeEnum>(
      ['success', 'info', 'warning', 'error'][randNum]
    );
    const msg = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
    this.alertService.addAlert(randType, msg);
  }
}

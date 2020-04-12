import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private alertService: AlertsService
  ) {}

  userName: String;

  drop = false;
  dropNotification = false;
  dropProjectSelector = false;

  onClickOutside(event: Object) {
    this.drop = false;
  }

  onClickOutsideProjectSelector(e) {
    this.dropProjectSelector = false;
  }

  ngOnInit() {
    this.userService.user.subscribe((user) => {
      if (user) {
        this.userName = user.displayName;
      }
    });
  }

  logout() {
    this.loginService.logout();
  }

  aa() {
    console.log("HI")
    this.alertService.alert("info", "Hello")
  }
}

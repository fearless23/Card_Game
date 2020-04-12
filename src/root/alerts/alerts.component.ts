import { Component, OnInit } from '@angular/core';

import { AlertsService } from '../../app/services/alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
})
export class AlertsComponent implements OnInit {
  alerts = [];
  length: Number;
  constructor(private alertsService: AlertsService) {}

  ngOnInit() {
    this.alertsService.getAlert().subscribe((alert) => {
      if (!alert) {
        // clear alerts when an empty alert is received
        this.alerts = [];
        this.length = this.alerts.length;
        return;
      }

      // add alert to array
      this.alerts.push(alert);
      this.length = this.alerts.length;
      if (alert.autoClose) {
        setTimeout(() => {
          this.alerts = this.alerts.filter((x) => x !== alert);
          this.length = this.alerts.length;
        }, 2000);
      }
      /*
      setTimeout(
        ()=> {
          this.alerts = this.alerts.filter(x => x !== alert);
          this.length = this.alerts.length;
        }, 2000);
      */
    });
  }

  removeAlert(alert) {
    this.alerts = this.alerts.filter((x) => x !== alert);
    this.length = this.alerts.length;
  }

  // func run inside HTML interpolation
  cssClass(alert) {
    if (!alert) {
      return;
    }

    // return css class based on alert type
    switch (alert.type) {
      case 'success':
        return 'success show';
      case 'error':
        return 'error show';
      case 'info':
        return 'info show';
      case 'warning':
        return 'warning show';
    }
  }
}

import { Component, OnInit } from '@angular/core';

import { AlertsService, AlertType } from '../../app/services/alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
})
export class AlertsComponent implements OnInit {
  alerts: AlertType[] = [];

  constructor(private alertsService: AlertsService) {}

  ngOnInit() {
    this.alertsService.getAlert().subscribe((alert) => {
      if (!alert) {
        this.alerts = [];
        return;
      }

      this.alerts.push(alert);
      if (alert.autoClose) {
        setTimeout(() => {
          this.alerts = this.alerts.filter((x) => x !== alert);
        }, 2000);
      }
    });
  }

  removeAlert(alert: AlertType) {
    this.alerts = this.alerts.filter((x) => x !== alert);
  }

  cssClass(alert: AlertType) {
    if (!alert) {
      return;
    }
    switch (alert.type) {
      case 'success':
        return 'is-success show';
      case 'error':
        return 'is-danger show';
      case 'info':
        return 'is-info show';
      case 'warning':
        return 'is-warning show';
    }
  }
}

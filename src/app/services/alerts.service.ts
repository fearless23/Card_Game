import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';

export type AlertTypeEnum = 'success' | 'info' | 'warning' | 'error';

export type AlertType = {
  type: AlertTypeEnum;
  message: string;
  autoClose: boolean;
};

@Injectable({ providedIn: 'root' })
export class AlertsService {
  private subject = new Subject<AlertType>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
          this.clear();
        }
      }
    });
  }

  getAlert() {
    return this.subject.asObservable();
  }

  addAlert(
    type: AlertTypeEnum,
    message: string,
    autoClose: boolean = false,
    keepAfterRouteChange = false
  ) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    const alert = {
      type: type,
      message: message,
      autoClose: autoClose,
    };
    this.subject.next(alert);
  }

  clear() {
    this.subject.next();
  }
}

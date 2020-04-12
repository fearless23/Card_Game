import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class AlertsService {
  private subject = new Subject();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
          // clear alert messages
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  alert(
    type,
    message: string,
    autoClose: Boolean = false,
    keepAfterRouteChange = false
  ) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    const ALERT = {
      type: type,
      message: message,
      autoClose: autoClose,
    };
    this.subject.next(ALERT);
  }

  clear() {
    // clear alerts
    this.subject.next();
  }
}

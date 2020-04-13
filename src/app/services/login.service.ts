import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AlertsService } from './alerts.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private alertsService: AlertsService
  ) {}

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then((success) => this.router.navigate(['']))
      .catch((err) => this.runError(err));
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/welcome']);
    });
  }

  private runError(x) {
    console.log(x.message);
    this.alertsService.addAlert('error', x);
  }
}

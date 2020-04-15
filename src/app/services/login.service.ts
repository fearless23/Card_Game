import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/app';
import { AlertsService } from './alerts.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private alertsSrv: AlertsService
  ) {}

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  async logout() {
    await this.afAuth.auth.signOut();
    this.alertsSrv.addAlert('success', 'Logout success');
    this.router.navigate(['/']);
  }

  private async oAuthLogin(provider) {
    try {
      await this.afAuth.auth.signInWithPopup(provider);
      this.alertsSrv.addAlert('success', 'Login success');
      this.router.navigate(['/']);
    } catch (error) {
      this.alertsSrv.addAlert('error', error.message as string);
    }
  }
}

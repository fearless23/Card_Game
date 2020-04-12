import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class UserService {
  user: Observable<any>;
  constructor(public afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
    //   .map(data => {
    //     if (data) {
    //       return {
    //         'name': data.displayName,
    //         'email': data.email,
    //         'imageURL': data.photoURL,
    //         'uid': data.uid,
    //         'creationTime': data.metadata.creationTime,
    //         'lastLogin': data.metadata.lastSignInTime,
    //         'provider': data.providerData[0].providerId
    //       };
    //     }
    //   });
  }
}

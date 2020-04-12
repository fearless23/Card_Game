import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  creationTime: string;
  lastLogin: string;
  provider: string;
}

@Injectable({ providedIn: 'root' })
export class UserService2 {
  user: Observable<User>;
  constructor(public afa: AngularFireAuth) {
    this.user = this.afa.authState.pipe(
      // take(1),
      map((user) => this.slicer(user))
    );
    // this.afa.user.subscribe( user => console.log('USER',user))
    // this.afa.authState.subscribe( user => console.log('AUTHSTATE',user))
    // Both are Exactly same
  }

  slicer({ displayName, email, photoURL, uid, metadata, providerData }) {
    return {
      displayName,
      email,
      photoURL,
      uid,
      creationTime: metadata.creationTime,
      lastLogin: metadata.lastSignInTime,
      provider: providerData[0].providerId,
    };
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  creationTime: string;
  lastLogin: string;
  provider: string;
}

const slicer = ({
  displayName,
  email,
  photoURL,
  uid,
  metadata,
  providerData,
}) => {
  return {
    displayName,
    email,
    photoURL,
    uid,
    creationTime: metadata.creationTime,
    lastLogin: metadata.lastSignInTime,
    provider: providerData[0].providerId,
  };
};

@Injectable({ providedIn: 'root' })
export class UserService {
  user$: Observable<User | null>;
  constructor(public afa: AngularFireAuth) {
    this.user$ = this.afa.authState.pipe(
      map((user) => {
        if (user) return slicer(user);
        else {
          return null;
        }
      })
    );
  }
}

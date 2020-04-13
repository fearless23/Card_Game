import { Injectable } from '@angular/core';
// import { StartModule } from './start.module';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from 'angularfire2/firestore';
import { GameType, DBQueryType, convertQuery } from './db.types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GamesService {
  private shirtCollection: AngularFirestoreCollection<GameType>;
  games: Observable<GameType[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.shirtCollection = afs.collection<GameType>('games', (ref) =>
      ref.where('joinAble', '==', false)
    );
    this.games = this.shirtCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as GameType))
      );
  }

  filterGames(q: DBQueryType) {
    this.afs.collection<GameType>('games', (ref) => convertQuery(ref, q));
  }
}

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
  private gamesColl: AngularFirestoreCollection<GameType>;
  games: Observable<GameType[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.gamesColl = afs.collection<GameType>('games', (ref) =>
      ref.where('joinAble', '==', true)
    );
    this.games = this.gamesColl
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as GameType))
      );
  }

  filterGames(q: DBQueryType) {
    this.afs.collection<GameType>('games', (ref) => convertQuery(ref, q));
  }

  async addGame(g: GameType) {
    try {
      g.docId = this.afs.createId();
      await this.afs.collection('games').doc(g.docId).set(g);
      return g.docId;
    } catch (error) {
      return error.message as string;
    }
  }

  getGame(docId: string) {
    return this.afs.collection('games').doc(docId).valueChanges() as Observable<
      GameType
    >;
  }
}

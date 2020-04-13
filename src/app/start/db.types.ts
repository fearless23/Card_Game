import { CollectionReference } from 'angularfire2/firestore';

export type GameType = {
  name: string;
  id: number;
  category: string;
  maxPlayers: number;
  playersJoined: number;
  private: boolean;
  joinAble: boolean;
  docId: string;
  players: { name: string; idx: string; admin: boolean }[];
};

export type DBQueryType = {
  find: {
    [key: string]: any;
  };
  limit?: number;
};

export const convertQuery = (ref: CollectionReference, q: DBQueryType) => {
  let x: firebase.firestore.Query;
  const findQuery = q.find;
  for (let key in findQuery) {
    x = ref.where(key, '==', findQuery[key]);
  }
  if (!!q.limit) x = ref.limit(q.limit);
  return x;
};

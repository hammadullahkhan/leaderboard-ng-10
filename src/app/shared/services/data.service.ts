import { Injectable } from '@angular/core';

import MockedLeaderBoard from '../../../mock/leaderboard-data.json';
import { IBoard } from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }

  loadMockedData() {

    let leaderboard:IBoard[] = Object.assign([], MockedLeaderBoard.data);
    leaderboard.forEach( item => {
      item.id = +item.id;
      item.points = +item.points;
    });
    return leaderboard;
  }

  resetPoints(items: IBoard[]) {
    items.forEach( item => {
      item.points = 0;
    });
    return items;
  }

}

import { Component, OnInit, OnChanges } from '@angular/core';

import { IBoard } from '../shared/models/board.model';
import { DataService } from "../shared/services/data.service";

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  leaderBoard: IBoard[];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.leaderBoard = this.dataService.loadMockedData();
  }

  incrementPoints(item: IBoard): void {
    ++item.points;
  }

  decrementPoints(item: IBoard): void {    
    --item.points;
  }

  resetPoints() {
    this.leaderBoard = this.dataService.resetPoints(this.leaderBoard);
  }

}

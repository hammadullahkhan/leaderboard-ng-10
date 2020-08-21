import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBoardComponent } from './leader-board.component';
import { DataService } from "../shared/services/data.service";
import { SortByPipe } from '../shared/pipes/sort-by.pipe';
import { sortByKeys } from '../shared/pipes/sort-by-keys';


class MockDataService {
    loadMockedData() { }
    resetPoints() {}
};

class MockSortByPipe {
  transform() {}
}

class MocksortByKeys {
  transform() {}
}

describe('LeaderBoardComponent', () => {
  let component: LeaderBoardComponent;
  let fixture: ComponentFixture<LeaderBoardComponent>;
  let dataService: DataService;
  let spy: any;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderBoardComponent, SortByPipe ],
      providers: [
        LeaderBoardComponent,
        { provide: DataService, useClass: MockDataService },
        { provide: SortByPipe, useClass: MockSortByPipe },
        { provide: sortByKeys, useClass: MocksortByKeys },
      ]
    })
    .compileComponents();

    component = TestBed.inject(LeaderBoardComponent);
    dataService = TestBed.inject(DataService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngonit', () => {      
    spy = spyOn(component, 'ngOnInit').and.returnValue(undefined);
    expect(component.ngOnInit()).toBe(undefined);
  });

  it('should call loaddata', () => {      
    spy = spyOn(component, 'loadData').and.returnValue(undefined);
    expect(component.loadData()).toBe(undefined);
  });

  it('should call loaddata, service should be called', () => {    
    const board = [{"id": 1,"name": "Emma","points": 25,"pointsLabel": "points"}];
    spy = spyOn(dataService, 'loadMockedData').and.returnValue(board);
    component.loadData();
    expect(dataService.loadMockedData).toHaveBeenCalled();
  });

  it('should have data in the class variable leaderboard', () => {    
    const board = [{"id": 1,"name": "Emma","points": 25,"pointsLabel": "points"}];
    spy = spyOn(dataService, 'loadMockedData').and.returnValue(board);
    component.loadData();
    dataService.loadMockedData();
    expect(component.leaderBoard.length).toBeGreaterThan(0);
  });

  it('should increament points', () => {    
    const item = {"id": 1,"name": "Emma","points": 25,"pointsLabel": "points"};
    const board = [item];
    spy = spyOn(dataService, 'loadMockedData').and.returnValue(board);
    component.loadData();
    dataService.loadMockedData();
    component.incrementPoints(item);
    expect(component.leaderBoard[0].points).toBeGreaterThan(25);
  });

  it('should decrement points', () => {    
    const item = {"id": 1,"name": "Emma","points": 25,"pointsLabel": "points"};
    const board = [item];
    spy = spyOn(dataService, 'loadMockedData').and.returnValue(board);
    component.loadData();
    dataService.loadMockedData();
    component.decrementPoints(item);
    expect(component.leaderBoard[0].points).toBeLessThan(25);
  });

  it('should reset points', () => {    
    const item = {"id": 1,"name": "Emma","points": 25,"pointsLabel": "points"};
    const board = [item];
    spy = spyOn(dataService, 'loadMockedData').and.returnValue(board);

    const item2 = {"id": 1,"name": "Emma","points": 0,"pointsLabel": "points"};
    const board2 = [item2];
    spy = spyOn(dataService, 'resetPoints').and.returnValue(board2);
    component.loadData();
    dataService.loadMockedData();
    component.resetPoints();
    expect(component.leaderBoard[0].points).toEqual(0);
  });

});

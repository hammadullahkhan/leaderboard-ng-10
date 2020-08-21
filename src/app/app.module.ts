import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { DataService } from './shared/services/data.service';
import { SortByPipe } from './shared/pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeaderBoardComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

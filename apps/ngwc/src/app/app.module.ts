import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersWidgetModule } from 'wctest-users';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, UsersWidgetModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

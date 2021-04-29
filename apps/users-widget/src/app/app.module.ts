import { HttpClientModule } from '@angular/common/http';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [UsersComponent]
})
export class UsersWidgetModule implements DoBootstrap {

  constructor(protected readonly injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(UsersComponent, injector);
    const webComponent = createCustomElement(UsersComponent, {injector, strategyFactory});
    customElements.define('wctest-users', webComponent);
  }

  ngDoBootstrap(): void {}
}

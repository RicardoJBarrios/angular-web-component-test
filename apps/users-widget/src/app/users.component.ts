import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { Users, UsersService } from '@wctest/users';

@Component({
  selector: 'wctest-users',
  template: `
    <h2>{{ myTitle }}</h2>
    <p *ngIf="users$ | async as users">{{ users | json }}</p>
  `,
  styles: [],
})
export class UsersComponent implements OnInit, OnDestroy {
  @Input() myUrl = '';
  @Input() myTitle = '';

  users$?: Observable<Users>;

  protected readonly destroy$: Subject<void> = new Subject();

  constructor(protected readonly service: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected getUsers(): void {
    if (this.myUrl) {
      this.users$ = this.service
        .findAll$(this.myUrl)
        .pipe(take(1), takeUntil(this.destroy$));
    }
  }
}

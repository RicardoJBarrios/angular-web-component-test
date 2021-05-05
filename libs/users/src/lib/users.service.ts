import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Users } from './users';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(protected readonly http: HttpClient) { }

  findAll$(url: string): Observable<Users> {
    return this.http.get<Users>(url);
  }
}

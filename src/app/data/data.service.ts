import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserSettings } from './user-settings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
  postUserSettingsForm(userSettings: IUserSettings): Observable<any> {
    return this.http.post(
      'https://putsreq.com/bBRiubsqIqqFcRWMyqFh',
      userSettings
    );
  }
}

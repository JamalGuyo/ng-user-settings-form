import { IUserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: IUserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'monthly',
    notes: 'some notes here..'
  };

  userSettings: IUserSettings = { ...this.originalUserSettings };
  constructor() {}

  ngOnInit() {}
}

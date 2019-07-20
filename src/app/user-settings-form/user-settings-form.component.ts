import { IUserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: IUserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };
  userSettings: IUserSettings = { ...this.originalUserSettings };
  subscriptionTypes: Observable<string[]>;
  postError: boolean = false;
  postErrorMessage: string;

  singleModel: string = 'On';
  startDate: Date;
  startTime: Date;
  userRating: number = 0;
  maxRating: number = 10;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }

  onBlur(nameField: NgModel) {
    console.log('On Blur: ' + nameField.valid);
  }
  handleHttpError(errorResponse: any) {
    console.log('error :', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
  onSubmit(form: NgForm) {
    console.log(form.valid);
    if (form.valid) {
      this.dataService
        .postUserSettingsForm(this.userSettings)
        .subscribe(
          result => console.log('success ', result),
          error => this.handleHttpError(error)
        );
    } else {
      this.postError = true;
      this.postErrorMessage = ' Please fix the above errors';
    }
  }
}

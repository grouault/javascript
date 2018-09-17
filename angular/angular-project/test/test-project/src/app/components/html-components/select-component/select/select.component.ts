import { Component, OnInit } from '@angular/core';
import {Profile} from '../../../../models/profile.model';
import {PROFILES} from '../../../../mocks/profiles.mock';
import {User} from '../../../../models/user.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  public user: User;
  public allProfiles: Profile[];

  constructor() { }

  ngOnInit() {
    this.allProfiles = PROFILES;
    this.user = new User();
  }

  submitUser(userForm: ngForm) {
    console.log('[submit] - userForm  ', userForm.value);
    console.log('[submit] - user  ', this.user);
  }
}

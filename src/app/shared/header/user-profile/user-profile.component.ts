import { Component, OnInit, Input } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() userName: string;

  constructor() {}

  ngOnInit() {}
}

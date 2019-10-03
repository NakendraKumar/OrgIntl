import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {
  profilePic: any;
  @Input() userId: string;

  constructor() {}

  ngOnInit() {
    this.showUserPicture();
  }

  showUserPicture() {
    // this.profilePic = '@assets/images/avatar.jpg';
  }
}

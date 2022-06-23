import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cegeka-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutHidden = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleAbout() {
    this.aboutHidden = !this.aboutHidden;
  }
}

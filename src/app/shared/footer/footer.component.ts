import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  gitS='https://img.icons8.com/ios-filled/30/000000/github--v1.png'
  linkedin='https://img.icons8.com/ios-filled/30/000000/linkedin-circled.png';
  email='https://img.icons8.com/ios-filled/30/000000/gmail-new.png'
  constructor() { }

  ngOnInit(): void {
  }

}

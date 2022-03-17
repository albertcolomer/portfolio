import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  title = 'About me'
  abaoutme = 'https://img.icons8.com/ios-filled/96/000000/about-us-male.png'
  

  /* linkedin2='https://img.icons8.com/fluency/60/000000/linkedin.png'; */

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  helloGif = 'assets/image/saludo.gif';
  gitS='https://img.icons8.com/color/40/000000/github--v1.png'
  linkedin='https://img.icons8.com/fluency/40/000000/linkedin-circled.png';
  constructor() { }

  ngOnInit(): void {
  }

}

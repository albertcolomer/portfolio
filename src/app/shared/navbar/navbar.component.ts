import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navbar:any;

  dataMenu = [
    {
      'titulo': 'About me',
      'icon': 'https://img.icons8.com/fluency/30/000000/about-us-male.png',
      'url': "#aboutme"
    },
    {
      'titulo': 'Experience',
      'icon': 'https://img.icons8.com/fluency/30/000000/macbook-money--v1.png',
      'url': "#experiences"
    },
    {
      'titulo': 'Skills',
      'icon': 'https://img.icons8.com/fluency/30/000000/laptop-coding.png',
      'url': "#skills"
    },
    {
      'titulo': 'Certificates',
      'icon': 'https://img.icons8.com/fluency/30/000000/macbook-medal.png',
      'url': "#certificates"
    },
    {
      'titulo': 'Projects',
      'icon': 'https://img.icons8.com/fluency/30/000000/keyboard.png',
      'url': "#projects"
    },
    {
      'titulo': 'Contact',
      'icon': 'https://img.icons8.com/fluency/30/000000/talk-male.png',
      'url': "#footer"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

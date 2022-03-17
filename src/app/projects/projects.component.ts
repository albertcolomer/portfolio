import { Component, OnInit } from '@angular/core';
import { projects } from './projects.constant';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = projects;

  icono='https://img.icons8.com/ios-filled/100/000000/keyboard.png'
  constructor() { }

  ngOnInit(): void {
  }

}

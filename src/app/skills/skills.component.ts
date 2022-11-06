import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  title='Skills'
  icono='https://img.icons8.com/ios-filled/100/000000/laptop-coding.png'
  sizeIcon='100'

  datafront=[    
    {
      'title':'Html 5',
      'icon':'https://img.icons8.com/color/70/000000/html-5--v1.png'
    },
    {
      'title':'css 3',
      'icon':'https://img.icons8.com/color/70/000000/css3.png',
    },
    {
      'title':'JavaScript',
      'icon':'https://img.icons8.com/color/70/000000/javascript--v1.png'
    },
    {
      'title':'TypesSript',
      'icon':'https://img.icons8.com/color/70/000000/typescript.png'
    },
    {
      'title':'Angular',
      'icon':'https://img.icons8.com/color/70/000000/angularjs.png',
    }]

    databack=[
    /* {
      'title':'Nodejs',
      'icon':'https://img.icons8.com/color/80/000000/nodejs.png'
    },
    {
      'title':'npm',
      'icon':'https://img.icons8.com/color/40/000000/npm.png'
    }, */
    {
      'title':'Java',
      'icon':'https://img.icons8.com/color/70/000000/java-coffee-cup-logo--v1.png'
    },
    {
      'title':'Eclipse',
      'icon':'https://img.icons8.com/ios-filled/60/000000/java-eclipse.png'
    },
    {
      'title':'Spring',
      'icon':'https://img.icons8.com/color/60/000000/spring-logo.png'
    }
       

  ]
/* database=[
  {
    'title':'mongoDB',
    'icon':'https://img.icons8.com/color/70/000000/mongodb.png'
  },
  {
    'title':'mySql',
    'icon':'https://img.icons8.com/color/60/000000/mysql-logo.png'
  }

] */
game=[
  {
    'title':'Blender',
    'icon':'https://img.icons8.com/color/70/000000/blender-3d.png'
  },/* {
    'title':'Autocad',
    'icon':'https://img.icons8.com/fluency/70/000000/autocad.png'
  }, */
  {
    'title':'Unity',
    'icon':'https://img.icons8.com/color/70/000000/unity.png'
  },
  {
    'title':'C#',
    'icon':"https://img.icons8.com/color/60/000000/c-sharp-logo.png"
  }

]

cloud=[
  {
    'title':'Azure',
    'icon':'https://img.icons8.com/color/70/000000/azure-1.png'
  },
  {
    'title':'Git',
    'icon':'https://img.icons8.com/color/70/000000/git.png'
  }

]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  title= 'Experience'
  icono='https://img.icons8.com/ios-filled/100/000000/macbook-money--v1.png';
  angular="https://img.icons8.com/ios-filled/30/000000/angularjs.png"
  
  

  dataExp=[
    {
      'logo':'assets/image/Logo-MSL.png',
      'empresa':'',
      'departamento':'Develop AWS',
      'date':'02/02/2023',
      'puesto':'Internship',
      'funciones':'API development with serverless services, lambda, s3, dynamoDB',
      'competencias':'Tecnologies',
      'skill1':'https://img.icons8.com/color/40/000000/amazon-web-services.png',
      'skill2':'https://img.icons8.com/color/40/000000/awslambda.png',
      'skill3':'https://img.icons8.com/external-phatplus-solid-phatplus/40/external-api-cloud-security-phatplus-solid-phatplus.png',
      'skill4':'https://img.icons8.com/color/40/000000/unity.png',
      'url':''

    },
    {
      'logo':'assets/image/agrupoSist.png',
      'empresa':'Agrupo Sistemas',
      'departamento':'Develop',
      'date':'02/01/2020 - 04/30/2021',
      'puesto':'Front-end',
      'funciones':'Develop in several projects front-end/back-end ',
      'competencias':'Tecnologies',
      'skill1':'https://img.icons8.com/color/40/000000/angularjs.png',
      'skill2':'https://img.icons8.com/color/40/000000/java-coffee-cup-logo--v1.png',
      'skill3':'https://img.icons8.com/ios-filled/40/000000/java-eclipse.png',
      'skill4':'https://img.icons8.com/color/40/000000/spring-logo.png',
      'url':''

    },
    {
      'logo':'assets/image/CEGET60x90.png',
      'empresa':'CEGET',
      'departamento':'J.Info Geographical',
      'date':'12/01/2010 - 04/03/2014',
      'puesto':'Tech Mapping',
      'funciones':'Upgrade  collection M7814',
      'competencias':'Orientation of stereo pairs, photointerpretation and data capture.',
      'comentario':'Descriptive video min  2:23 - 3:04',
      'url':'https://ejercito.defensa.gob.es/unidades/Madrid/ceget/Multimedia/institucional/Institucional2019.html'
    },
    {
      'logo':'assets/image/olmoyrullan.png',
      'empresa':'del Olmo&Rullan',
      'departamento':'Commercial',
      'date':'10/01/2016 - 09/21/2019',
      'puesto':'Real estate advisor',
      'funciones':'Real estate acquisition, sales and leasing',
      'competencias':'Area management, marketing actions, mortgage counseling',
      'url':''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

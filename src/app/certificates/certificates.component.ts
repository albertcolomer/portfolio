import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  title='Certificates'
  icon='https://img.icons8.com/ios-filled/100/000000/macbook-medal.png'  
  perfilCredly="https://www.credly.com/users/alberto-colomer-mayola"
  

  constructor() { }

  dataCertificates=[
    {
      'insignia':'assets/image/azure.png',
      'copia':'AZ-900 AZUIRE FUNDAMENTALS',
      'codigo':'',
      'iconCredly':'assets/image/credly.jpg',
      'details':'https://www.credly.com/badges/65aaadbc-4126-461a-9bb7-84e8a9b8e08c/public_url',
    },{
      'insignia':'  ',
      'copia':'IFCT0609 PROGRAMACIÓN DE SISTEMAS INFORMÁTICOS',
      'codigo':'code: 0982523646798833348167',
      'iconCredly':'assets/image/madrid-28525_640.png',
      'details':'http://www.madrid.org/csv',
  }]

  ngOnInit(): void {
    
  }

}

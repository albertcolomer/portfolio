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
      'name':'AZ-900 AZURE FUNDAMENTALS',
      'code':'',
      'provider':'assets/image/credly.jpg',
      'details':'https://www.credly.com/badges/65aaadbc-4126-461a-9bb7-84e8a9b8e08c/public_url',
    },{
      'insignia':'  ',
      'name':'IFCT0609 COMPUTER SYSTEMS PROGRAMING',
      'code':'code: 0982523646798833348167',
      'provider':'assets/image/madrid-28525_640.png',
      'details':'http://www.madrid.org/csv',
    },{
      'insignia':'assets/image/logo-CESUR-300x261.png',
      'name':'IFCT078PO PATRONES SOFTWARE',
      'code':' ',
      'provider':'https://img.icons8.com/color/64/pdf-2.png',
      'details':'assets/image/IFCT078PO___PATRONES_SOFTWAR.pdf',
    },{
      'insignia':'assets/image/LogoCeinpro.jfif',
      'name':'IFCD91 AR, VR, MR in environments 4.0',
      'code':' ',
      'provider':'https://img.icons8.com/color/64/pdf-2.png',
      'details':'assets/image/Diploma VRAR.pdf',
}]

  ngOnInit(): void {
    
  }

}

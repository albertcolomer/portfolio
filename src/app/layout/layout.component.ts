import { Component, OnInit } from '@angular/core';
import * as AOS  from 'aos';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showC!:boolean;
  closedIcon="https://img.icons8.com/fluency/40/000000/menu--v1.png";
  
 

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  desplegarMC(){
    if(this.showC){
      this.showC=false
      this.closedIcon="https://img.icons8.com/fluency/40/000000/menu--v1.png";
    }else{
      this.showC=true
      this.closedIcon="https://img.icons8.com/nolan/48/delete-sign.png";
    }
  }

  change(){
    console.log(this.showC);
    
    if(this.showC){
      this.showC=false
      this.closedIcon="https://img.icons8.com/fluency/40/000000/menu--v1.png";
    }else{
      this.showC=true
      this.closedIcon="https://img.icons8.com/nolan/48/delete-sign.png";
    }
  }

}

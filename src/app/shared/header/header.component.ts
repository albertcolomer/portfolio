import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  brand = 'assets/image/laptop3.svg';
  menuI="https://img.icons8.com/fluency/40/000000/menu--v1.png";
  closedIcon="https://img.icons8.com/fluency/40/000000/menu--v1.png";
  gitS = 'https://img.icons8.com/color/70/000000/github--v1.png'
  linkedin = 'https://img.icons8.com/fluency/70/000000/linkedin-circled.png';
  show=false;
  //showC=false

  @Output() btn=new EventEmitter<boolean>()
  @Input() showC=false

  constructor() { }

  ngOnInit(): void {
  }

  /* alternative menu */
  /* desplegarM(){
    if(this.show){
      this.show=false
      this.menuI="https://img.icons8.com/fluency/40/000000/menu--v1.png";
    }else{
      this.show=true
      this.menuI="https://img.icons8.com/fluency/48/000000/double-right.png";
    }
      
  } */

  desplegarM0(){
    console.log(this.showC);
    if(this.showC){
      
      this.showC=false
      this.closedIcon="https://img.icons8.com/fluency/40/000000/menu--v1.png";
    }else{
      this.showC=true
      this.closedIcon="https://img.icons8.com/fluency/48/000000/delete-sign.png";
    }

  }

  desplegarM2(){
    this.btn.emit(this.showC)
    console.log(this.showC);
    
    /* console.log(this.showC);
    if(this.showC){
      
      this.showC=false
      this.menuI="https://img.icons8.com/fluency/40/000000/menu--v1.png";
    }else{
      this.showC=true
      this.menuI="https://img.icons8.com/fluency/48/000000/double-right.png";
    } */
  }
}

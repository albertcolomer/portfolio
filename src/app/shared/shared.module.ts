import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './project/project.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProjectComponent, NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProjectComponent,
    NavbarComponent
  ]
})
export class SharedModule { }

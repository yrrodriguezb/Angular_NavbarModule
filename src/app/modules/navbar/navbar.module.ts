import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { NavItemListComponent } from './components/nav-item-list/nav-item-list.component';
import { SidebarService } from './services';



@NgModule({
  declarations: [
    NavbarComponent,
    NavTopComponent,
    NavItemListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [ SidebarService ]
})
export class NavbarModule { }

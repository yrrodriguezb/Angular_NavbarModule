import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidebarService } from '../../services';
import { NavItems } from '../../interfaces/navitems';
import { fadeAnimation } from '../../animations/fadeIn.animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  navItems: NavItems = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sidebarService: SidebarService,
    private http: HttpClient) {}

  ngAfterViewInit() {
    this.getItemsMenu();
    this.sidebarService.appDrawer = this.appDrawer;
  }

  getItemsMenu() {
    this.sidebarService.getItems().subscribe((data: any) => {
      this.navItems = data.items;
    });
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}

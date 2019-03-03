import { Component } from '@angular/core';
import { SidebarService } from '../../services';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent {
  constructor(public sidebarService: SidebarService) { }
}

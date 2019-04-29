import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../../interfaces/navitems';
import { SidebarService } from '../../services';
import { indicatorRotate, slideInDown } from '../../animations';

@Component({
  selector: 'app-nav-item-list',
  templateUrl: './nav-item-list.component.html',
  styleUrls: ['./nav-item-list.component.scss'],
  animations: [
    indicatorRotate,
    slideInDown
  ]
})
export class NavItemListComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  constructor(
    public sidebarSerive: SidebarService,
    public router: Router
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.inicializar();
  }

  inicializar() {
    this.sidebarSerive.currentUrl.subscribe((url: string) => {
      if (this.item.ruta && url) {
        this.expanded = url.indexOf(`/${this.item.ruta}`) === 0;
        this.ariaExpanded = this.expanded;
      }
    });
  }

  itemSelected(item: NavItem) {
    if (!item.subitems || !item.subitems.length) {
      this.router.navigate([item.ruta]);
      // this.sidebarSerive.toggle();
    }
    if (item.subitems && item.subitems.length) {
      this.expanded = !this.expanded;
    }
  }
}

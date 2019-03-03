import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavItems } from '../../interfaces/navitems';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.inicializar();
  }

  inicializar() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public toggle() {
    this.appDrawer.toggle();
  }

  public getItems(): Observable<NavItems> {
    return this.http.get<NavItems>(environment.urlAssets.menu);
  }
}

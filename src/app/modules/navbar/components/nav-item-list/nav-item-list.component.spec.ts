import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemListComponent } from './nav-item-list.component';

describe('NavItemListComponent', () => {
  let component: NavItemListComponent;
  let fixture: ComponentFixture<NavItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

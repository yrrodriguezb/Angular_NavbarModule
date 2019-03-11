import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTopComponent } from './nav-top.component';
import { MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavTopComponent', () => {
  let component: NavTopComponent;
  let fixture: ComponentFixture<NavTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTopComponent ],
      imports: [
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

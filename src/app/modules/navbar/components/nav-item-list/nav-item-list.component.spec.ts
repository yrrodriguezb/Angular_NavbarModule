import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavItemListComponent } from './nav-item-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';


describe('NavItemListComponent', () => {
  let component: NavItemListComponent;
  let fixture: ComponentFixture<NavItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule],
      declarations: [ NavItemListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemListComponent);
    component = fixture.componentInstance;

    component.item = {
      descripcion: 'Link 4',
      nombreIcono: 'comment',
      subitems: [
        { descripcion: 'Link 4.1', ruta: '' },
        { descripcion: 'Link 4.2', ruta: '' },
        { descripcion: 'Link 4.3', ruta: '' }
      ]
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe obtener el objeto que se pintara en el componente y verifica que sea del mismo tipo esperado.', () => {
    const contextItem = fixture.debugElement.context.item;
    const expectedItem = component.item;
    const expectedIgualdadObjeto = Object.is(expectedItem, contextItem);

    expect(contextItem).toBe(expectedItem);
    expect(expectedIgualdadObjeto).toBeTruthy();
  });
});

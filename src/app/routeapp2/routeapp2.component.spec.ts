import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routeapp2Component } from './routeapp2.component';

describe('Routeapp2Component', () => {
  let component: Routeapp2Component;
  let fixture: ComponentFixture<Routeapp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routeapp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routeapp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

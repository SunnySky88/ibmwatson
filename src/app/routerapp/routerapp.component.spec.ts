import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterappComponent } from './routerapp.component';

describe('RouterappComponent', () => {
  let component: RouterappComponent;
  let fixture: ComponentFixture<RouterappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarAngularComponent } from './list-car-angular.component';

describe('ListCarAngularComponent', () => {
  let component: ListCarAngularComponent;
  let fixture: ComponentFixture<ListCarAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCarAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

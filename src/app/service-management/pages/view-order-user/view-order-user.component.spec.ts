import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderUserComponent } from './view-order-user.component';

describe('ViewOrderUserComponent', () => {
  let component: ViewOrderUserComponent;
  let fixture: ComponentFixture<ViewOrderUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewOrderUserComponent]
    });
    fixture = TestBed.createComponent(ViewOrderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdersUserComponent } from './list-orders-user.component';

describe('ListOrdersUserComponent', () => {
  let component: ListOrdersUserComponent;
  let fixture: ComponentFixture<ListOrdersUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOrdersUserComponent]
    });
    fixture = TestBed.createComponent(ListOrdersUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

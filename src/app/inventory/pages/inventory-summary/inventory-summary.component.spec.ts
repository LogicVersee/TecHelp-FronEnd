import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySummaryComponent } from './inventory-summary.component';

describe('InventorySummaryComponent', () => {
  let component: InventorySummaryComponent;
  let fixture: ComponentFixture<InventorySummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorySummaryComponent]
    });
    fixture = TestBed.createComponent(InventorySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

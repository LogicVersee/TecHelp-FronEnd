import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTechnicalComponent } from './inventory-technical.component';

describe('InventoryTechnicalComponent', () => {
  let component: InventoryTechnicalComponent;
  let fixture: ComponentFixture<InventoryTechnicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryTechnicalComponent]
    });
    fixture = TestBed.createComponent(InventoryTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

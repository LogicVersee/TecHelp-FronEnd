import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTechnicalComponent } from './select-technical.component';

describe('SelectTechnicalComponent', () => {
  let component: SelectTechnicalComponent;
  let fixture: ComponentFixture<SelectTechnicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTechnicalComponent]
    });
    fixture = TestBed.createComponent(SelectTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

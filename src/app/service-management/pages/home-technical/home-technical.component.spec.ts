import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTechnicalComponent } from './home-technical.component';

describe('HomeTechnicalComponent', () => {
  let component: HomeTechnicalComponent;
  let fixture: ComponentFixture<HomeTechnicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTechnicalComponent]
    });
    fixture = TestBed.createComponent(HomeTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

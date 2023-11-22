import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSidenavComponent } from './technical-sidenav.component';

describe('TechnicalSidenavComponent', () => {
  let component: TechnicalSidenavComponent;
  let fixture: ComponentFixture<TechnicalSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalSidenavComponent]
    });
    fixture = TestBed.createComponent(TechnicalSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

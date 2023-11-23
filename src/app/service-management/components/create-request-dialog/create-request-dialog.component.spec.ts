import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequestDialogComponent } from './create-request-dialog.component';

describe('CreateRequestDialogComponent', () => {
  let component: CreateRequestDialogComponent;
  let fixture: ComponentFixture<CreateRequestDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRequestDialogComponent]
    });
    fixture = TestBed.createComponent(CreateRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

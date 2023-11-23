import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileTechnicalComponent } from './edit-profile-technical.component';

describe('EditProfileTechnicalComponent', () => {
  let component: EditProfileTechnicalComponent;
  let fixture: ComponentFixture<EditProfileTechnicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfileTechnicalComponent]
    });
    fixture = TestBed.createComponent(EditProfileTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

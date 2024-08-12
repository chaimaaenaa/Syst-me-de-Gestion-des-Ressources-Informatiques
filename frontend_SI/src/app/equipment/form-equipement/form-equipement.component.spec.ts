import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEquipementComponent } from './form-equipement.component';

describe('FormEquipementComponent', () => {
  let component: FormEquipementComponent;
  let fixture: ComponentFixture<FormEquipementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEquipementComponent]
    });
    fixture = TestBed.createComponent(FormEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

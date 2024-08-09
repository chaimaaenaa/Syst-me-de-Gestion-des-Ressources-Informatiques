import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneComponent } from './personne.component';

describe('PersonneComponent', () => {
  let component: PersonneComponent;
  let fixture: ComponentFixture<PersonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonneComponent]
    });
    fixture = TestBed.createComponent(PersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

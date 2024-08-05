import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanneComponent } from './panne.component';

describe('PanneComponent', () => {
  let component: PanneComponent;
  let fixture: ComponentFixture<PanneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanneComponent]
    });
    fixture = TestBed.createComponent(PanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

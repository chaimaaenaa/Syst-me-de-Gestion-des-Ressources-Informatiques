import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienDashboardComponent } from './technicien-dashboard.component';

describe('TechnicienDashboardComponent', () => {
  let component: TechnicienDashboardComponent;
  let fixture: ComponentFixture<TechnicienDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicienDashboardComponent]
    });
    fixture = TestBed.createComponent(TechnicienDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

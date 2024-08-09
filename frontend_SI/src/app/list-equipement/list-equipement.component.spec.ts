import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquipementComponent } from './list-equipement.component';

describe('ListEquipementComponent', () => {
  let component: ListEquipementComponent;
  let fixture: ComponentFixture<ListEquipementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEquipementComponent]
    });
    fixture = TestBed.createComponent(ListEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

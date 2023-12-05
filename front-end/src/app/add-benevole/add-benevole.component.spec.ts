import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBenevoleComponent } from './add-benevole.component';

describe('AddBenevoleComponent', () => {
  let component: AddBenevoleComponent;
  let fixture: ComponentFixture<AddBenevoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBenevoleComponent]
    });
    fixture = TestBed.createComponent(AddBenevoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

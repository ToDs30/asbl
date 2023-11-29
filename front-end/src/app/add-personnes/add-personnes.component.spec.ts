import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonnesComponent } from './add-personnes.component';

describe('AddPersonnesComponent', () => {
  let component: AddPersonnesComponent;
  let fixture: ComponentFixture<AddPersonnesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPersonnesComponent]
    });
    fixture = TestBed.createComponent(AddPersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBenevoleComponent } from './liste-benevole.component';

describe('ListeBenevoleComponent', () => {
  let component: ListeBenevoleComponent;
  let fixture: ComponentFixture<ListeBenevoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeBenevoleComponent]
    });
    fixture = TestBed.createComponent(ListeBenevoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

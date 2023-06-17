import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTableComponentComponent } from './results-table-component.component';

describe('ResultsTableComponentComponent', () => {
  let component: ResultsTableComponentComponent;
  let fixture: ComponentFixture<ResultsTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsTableComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

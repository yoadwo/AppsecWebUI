import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciesResultsTableComponentComponent } from './dependencies-results-table-component.component';

describe('ResultsTableComponentComponent', () => {
  let component: DependenciesResultsTableComponentComponent;
  let fixture: ComponentFixture<DependenciesResultsTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependenciesResultsTableComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependenciesResultsTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

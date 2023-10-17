import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaliciousResultsTableComponentComponent } from './malicious-results-table-component.component';

describe('MaliciousResultsTableComponentComponent', () => {
  let component: MaliciousResultsTableComponentComponent;
  let fixture: ComponentFixture<MaliciousResultsTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaliciousResultsTableComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaliciousResultsTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciesFormComponent } from './dependencies-form.component';

describe('DependenciesFormComponent', () => {
  let component: DependenciesFormComponent;
  let fixture: ComponentFixture<DependenciesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependenciesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependenciesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

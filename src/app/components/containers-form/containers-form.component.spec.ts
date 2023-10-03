import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersFormComponent } from './containers-form.component';

describe('ContainersFormComponent', () => {
  let component: ContainersFormComponent;
  let fixture: ComponentFixture<ContainersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

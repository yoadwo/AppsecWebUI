import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaliciousFormComponent } from './malicious-form.component';

describe('MaliciousFormComponent', () => {
  let component: MaliciousFormComponent;
  let fixture: ComponentFixture<MaliciousFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaliciousFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaliciousFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

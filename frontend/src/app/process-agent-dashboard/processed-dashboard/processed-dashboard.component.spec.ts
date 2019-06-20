import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedDashboardComponent } from './processed-dashboard.component';

describe('ProcessedDashboardComponent', () => {
  let component: ProcessedDashboardComponent;
  let fixture: ComponentFixture<ProcessedDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

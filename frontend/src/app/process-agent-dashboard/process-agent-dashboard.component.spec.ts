import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAgentDashboardComponent } from './process-agent-dashboard.component';

describe('ProcessAgentDashboardComponent', () => {
  let component: ProcessAgentDashboardComponent;
  let fixture: ComponentFixture<ProcessAgentDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessAgentDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessAgentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

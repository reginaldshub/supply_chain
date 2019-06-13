import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailAgentDashboardComponent } from './retail-agent-dashboard.component';

describe('RetailAgentDashboardComponent', () => {
  let component: RetailAgentDashboardComponent;
  let fixture: ComponentFixture<RetailAgentDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailAgentDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailAgentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

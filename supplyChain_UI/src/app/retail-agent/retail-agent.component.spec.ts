import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailAgentComponent } from './retail-agent.component';

describe('RetailAgentComponent', () => {
  let component: RetailAgentComponent;
  let fixture: ComponentFixture<RetailAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

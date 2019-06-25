import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasferedDashboardComponent } from './trasfered-dashboard.component';

describe('TrasferedDashboardComponent', () => {
  let component: TrasferedDashboardComponent;
  let fixture: ComponentFixture<TrasferedDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasferedDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasferedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

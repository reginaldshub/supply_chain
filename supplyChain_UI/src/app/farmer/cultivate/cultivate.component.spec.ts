import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivalteComponent } from './cultivate.component';

describe('CultivalteComponent', () => {
  let component: CultivalteComponent;
  let fixture: ComponentFixture<CultivalteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultivalteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultivalteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

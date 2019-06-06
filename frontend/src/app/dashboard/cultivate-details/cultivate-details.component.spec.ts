import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivateDetailsComponent } from './cultivate-details.component';

describe('CultivateDetailsComponent', () => {
  let component: CultivateDetailsComponent;
  let fixture: ComponentFixture<CultivateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultivateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultivateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

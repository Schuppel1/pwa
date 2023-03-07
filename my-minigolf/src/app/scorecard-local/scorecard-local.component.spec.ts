import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardLocalComponent } from './scorecard-local.component';

describe('ScorecardLocalComponent', () => {
  let component: ScorecardLocalComponent;
  let fixture: ComponentFixture<ScorecardLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorecardLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScorecardLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

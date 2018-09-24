import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoCreditsComponent } from './fo-credits.component';

describe('FoCreditsComponent', () => {
  let component: FoCreditsComponent;
  let fixture: ComponentFixture<FoCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoLogoComponent } from './fo-logo.component';

describe('FoLogoComponent', () => {
  let component: FoLogoComponent;
  let fixture: ComponentFixture<FoLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoTopContentComponent } from './lo-top-content.component';

describe('LoTopContentComponent', () => {
  let component: LoTopContentComponent;
  let fixture: ComponentFixture<LoTopContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoTopContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoTopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoNavComponent } from './fo-nav.component';

describe('FoNavComponent', () => {
  let component: FoNavComponent;
  let fixture: ComponentFixture<FoNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

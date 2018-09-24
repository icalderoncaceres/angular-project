import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoImgReferenceComponent } from './lo-img-reference.component';

describe('LoImgReferenceComponent', () => {
  let component: LoImgReferenceComponent;
  let fixture: ComponentFixture<LoImgReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoImgReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoImgReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

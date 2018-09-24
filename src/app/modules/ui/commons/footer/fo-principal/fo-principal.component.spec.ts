import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoPrincipalComponent } from './fo-principal.component';

describe('FoPrincipalComponent', () => {
  let component: FoPrincipalComponent;
  let fixture: ComponentFixture<FoPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

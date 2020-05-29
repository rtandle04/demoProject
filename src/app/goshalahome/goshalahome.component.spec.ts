import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoshalahomeComponent } from './goshalahome.component';

describe('GoshalahomeComponent', () => {
  let component: GoshalahomeComponent;
  let fixture: ComponentFixture<GoshalahomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoshalahomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoshalahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

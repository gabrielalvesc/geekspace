import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostpassComponent } from './lostpass.component';

describe('LostpassComponent', () => {
  let component: LostpassComponent;
  let fixture: ComponentFixture<LostpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

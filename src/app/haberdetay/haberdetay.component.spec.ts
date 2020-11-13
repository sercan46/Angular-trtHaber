import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaberdetayComponent } from './haberdetay.component';

describe('HaberdetayComponent', () => {
  let component: HaberdetayComponent;
  let fixture: ComponentFixture<HaberdetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaberdetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaberdetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

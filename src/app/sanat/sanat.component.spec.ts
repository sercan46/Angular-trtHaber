import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanatComponent } from './sanat.component';

describe('SanatComponent', () => {
  let component: SanatComponent;
  let fixture: ComponentFixture<SanatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

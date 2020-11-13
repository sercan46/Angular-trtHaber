import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkonomiComponent } from './ekonomi.component';

describe('EkonomiComponent', () => {
  let component: EkonomiComponent;
  let fixture: ComponentFixture<EkonomiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkonomiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkonomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

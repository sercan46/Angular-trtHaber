import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgitimComponent } from './egitim.component';

describe('EgitimComponent', () => {
  let component: EgitimComponent;
  let fixture: ComponentFixture<EgitimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgitimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgitimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

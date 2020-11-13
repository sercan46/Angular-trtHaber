import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaglikComponent } from './saglik.component';

describe('SaglikComponent', () => {
  let component: SaglikComponent;
  let fixture: ComponentFixture<SaglikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaglikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaglikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

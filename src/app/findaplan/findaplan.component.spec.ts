import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindaplanComponent } from './findaplan.component';

describe('FindaplanComponent', () => {
  let component: FindaplanComponent;
  let fixture: ComponentFixture<FindaplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindaplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindaplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

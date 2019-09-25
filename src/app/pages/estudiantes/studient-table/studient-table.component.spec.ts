import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudientTableComponent } from './studient-table.component';

describe('StudientTableComponent', () => {
  let component: StudientTableComponent;
  let fixture: ComponentFixture<StudientTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudientTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudientTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

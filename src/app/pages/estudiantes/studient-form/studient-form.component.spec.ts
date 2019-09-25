import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudientFormComponent } from './studient-form.component';

describe('StudientFormComponent', () => {
  let component: StudientFormComponent;
  let fixture: ComponentFixture<StudientFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudientFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

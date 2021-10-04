import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindACourseComponent } from './find-a-course.component';

describe('FindACourseComponent', () => {
  let component: FindACourseComponent;
  let fixture: ComponentFixture<FindACourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindACourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindACourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

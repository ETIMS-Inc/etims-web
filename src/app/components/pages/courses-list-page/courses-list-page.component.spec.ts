import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListPageComponent } from './courses-list-page.component';

describe('CoursesListPageComponent', () => {
  let component: CoursesListPageComponent;
  let fixture: ComponentFixture<CoursesListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListPageComponent]
    });
    fixture = TestBed.createComponent(CoursesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

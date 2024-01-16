import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRendererComponent } from './form-renderer.component';

describe('FormComponent', () => {
  let component: FormRendererComponent;
  let fixture: ComponentFixture<FormRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormRendererComponent]
    });
    fixture = TestBed.createComponent(FormRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

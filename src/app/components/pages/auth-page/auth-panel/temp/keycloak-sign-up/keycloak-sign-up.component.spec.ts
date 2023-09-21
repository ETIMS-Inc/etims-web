import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycloakSignUpComponent } from './keycloak-sign-up.component';

describe('KeycloakSignUpComponent', () => {
  let component: KeycloakSignUpComponent;
  let fixture: ComponentFixture<KeycloakSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KeycloakSignUpComponent]
    });
    fixture = TestBed.createComponent(KeycloakSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycloakSignInComponent } from './keycloak-sign-in.component';

describe('KeycloakSignInComponent', () => {
  let component: KeycloakSignInComponent;
  let fixture: ComponentFixture<KeycloakSignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KeycloakSignInComponent]
    });
    fixture = TestBed.createComponent(KeycloakSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

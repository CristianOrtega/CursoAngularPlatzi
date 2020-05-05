import { TestBed } from '@angular/core/testing';

import { LoginLdapServiceService } from './login-ldap-service.service';

describe('LoginLdapServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginLdapServiceService = TestBed.get(LoginLdapServiceService);
    expect(service).toBeTruthy();
  });
});

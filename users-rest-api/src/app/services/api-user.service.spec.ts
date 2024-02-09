import { TestBed } from '@angular/core/testing';

import { APIUserService } from './api-user.service';

describe('APIUserService', () => {
  let service: APIUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

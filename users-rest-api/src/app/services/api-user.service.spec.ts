import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { APIUserService } from './api-user.service';

describe('APIUserService', () => {
  let service: APIUserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(APIUserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getUsersRestApiNodeJS', () => {
    it('should return expected users', () => {
      const expectedUsers = [
        {id: 1, name: 'User 1'},
        {id: 2, name: 'User 2'}
      ];

      service.getUsersRestApiNodeJS().subscribe(
        users => expect(users).toEqual(expectedUsers)
      );

      const req = httpTestingController.expectOne(service.restApiNodeJS);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedUsers);
    });

    it('should return empty array on error', () => {
      const errorResponse = new ErrorEvent('Network error');

      service.getUsersRestApiNodeJS().subscribe(
        users => expect(users.length).toEqual(0)
      );

      const req = httpTestingController.expectOne(service.restApiNodeJS);
      req.error(errorResponse);
    });
  });
});

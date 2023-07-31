import { TestBed } from '@angular/core/testing';

import { ErrorsHttpService } from './errors-http.service';

describe('ErrorsHttpService', () => {
  let service: ErrorsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

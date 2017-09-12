import { TestBed, inject } from '@angular/core/testing';

import { HttpDataServiceService } from './http-data-service.service';

describe('HttpDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpDataServiceService]
    });
  });

  it('should be created', inject([HttpDataServiceService], (service: HttpDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FaHttpService } from './fa-http.service';

describe('FaHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaHttpService]
    });
  });

  it('should ...', inject([FaHttpService], (service: FaHttpService) => {
    expect(service).toBeTruthy();
  }));
});

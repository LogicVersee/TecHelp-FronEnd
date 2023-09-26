import { TestBed } from '@angular/core/testing';

import { TecnicalsServiceService } from './technicals-service.service';

describe('TecnicalsServiceService', () => {
  let service: TecnicalsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnicalsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

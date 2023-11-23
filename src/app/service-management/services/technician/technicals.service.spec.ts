import { TestBed } from '@angular/core/testing';

import { TechnicalsService } from './technicals.service';

describe('TechnicalsService', () => {
  let service: TechnicalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

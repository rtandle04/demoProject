import { TestBed } from '@angular/core/testing';

import { GoshalaapiService } from './goshalaapi.service';

describe('GoshalaapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoshalaapiService = TestBed.get(GoshalaapiService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CarsDataService } from './cars-data.service';

describe('CarsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsDataService = TestBed.get(CarsDataService);
    expect(service).toBeTruthy();
  });
});

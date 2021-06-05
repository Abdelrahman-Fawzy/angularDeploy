import { TestBed } from '@angular/core/testing';

import { dbServices } from './db.services';

describe('ServiceTestService', () => {
  let service: dbServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dbServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

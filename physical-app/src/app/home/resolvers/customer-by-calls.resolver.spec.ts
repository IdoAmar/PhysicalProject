import { TestBed } from '@angular/core/testing';

import { CustomerByCallsResolver } from './customer-by-calls.resolver';

describe('CustomerByCallsResolver', () => {
  let resolver: CustomerByCallsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CustomerByCallsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServiceScriptService } from './service-script.service';

describe('ServiceScriptService', () => {
  let service: ServiceScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

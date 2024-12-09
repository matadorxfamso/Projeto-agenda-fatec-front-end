import { TestBed } from '@angular/core/testing';

import { AgendaaService } from './agendaa.service';

describe('AgendaaService', () => {
  let service: AgendaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

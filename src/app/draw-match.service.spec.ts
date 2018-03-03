import { TestBed, inject } from '@angular/core/testing';

import { DrawMatchService } from './draw-match.service';

describe('DrawMatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawMatchService]
    });
  });

  it('should be created', inject([DrawMatchService], (service: DrawMatchService) => {
    expect(service).toBeTruthy();
  }));
});

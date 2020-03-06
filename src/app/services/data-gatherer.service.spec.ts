import { TestBed } from '@angular/core/testing';

import { DataGathererService } from './data-gatherer.service';

describe('DataGathererService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataGathererService = TestBed.get(DataGathererService);
    expect(service).toBeTruthy();
  });
});

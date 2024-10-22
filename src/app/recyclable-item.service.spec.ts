import { TestBed } from '@angular/core/testing';

import { RecyclableItemService } from './recyclable-item.service';

describe('RecyclableItemService', () => {
  let service: RecyclableItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecyclableItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

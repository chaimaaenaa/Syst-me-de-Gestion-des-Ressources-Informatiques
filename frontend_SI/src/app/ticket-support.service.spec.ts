import { TestBed } from '@angular/core/testing';

import { TicketSupportService } from './ticket-support.service';

describe('TicketSupportService', () => {
  let service: TicketSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { Saludo } from './saludo';

describe('Saludo', () => {
  let service: Saludo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Saludo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

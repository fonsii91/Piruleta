import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Padre } from './padre';

describe('Padre', () => {
  let component: Padre;
  let fixture: ComponentFixture<Padre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Padre],
    }).compileComponents();

    fixture = TestBed.createComponent(Padre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

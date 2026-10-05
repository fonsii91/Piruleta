import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaFrutas } from './lista-frutas';

describe('ListaFrutas', () => {
  let component: ListaFrutas;
  let fixture: ComponentFixture<ListaFrutas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFrutas]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListaFrutas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

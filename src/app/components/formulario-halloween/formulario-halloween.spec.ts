import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioHalloween } from './formulario-halloween';

describe('FormularioHalloween', () => {
  let component: FormularioHalloween;
  let fixture: ComponentFixture<FormularioHalloween>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioHalloween],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioHalloween);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

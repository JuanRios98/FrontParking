import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCeldaComponent } from './crear-celda.component';

describe('CrearCeldaComponent', () => {
  let component: CrearCeldaComponent;
  let fixture: ComponentFixture<CrearCeldaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearCeldaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCeldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

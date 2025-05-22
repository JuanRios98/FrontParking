import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCeldaComponent } from './detalle-celda.component';

describe('DetalleCeldaComponent', () => {
  let component: DetalleCeldaComponent;
  let fixture: ComponentFixture<DetalleCeldaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleCeldaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCeldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

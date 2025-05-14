import { Component, Output,EventEmitter } from '@angular/core';
import { CeldaService } from '../../services/celda.service';
import { Celda } from '../../models/celda.module';

@Component({
  selector: 'app-crear-celda',
  standalone: false,
  templateUrl: './crear-celda.component.html',
  styleUrl: './crear-celda.component.css'
})
export class CrearCeldaComponent {

  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<Celda>();
  

  nuevaCelda: Celda = {
    id: 0,
    codigo: '',
    tipoCelda: 'Automovil',
    estadoCelda: 'Libre'
  };

  guardarCelda() {
    this.guardar.emit(this.nuevaCelda);
  }

  cerrarModal() {
    this.cerrar.emit();
  }
}
  



// guardarCelda() {
//     if (!this.nuevaCelda.nombre.trim()) return;

//     this.celdaService.crearCelda(this.nuevaCelda).subscribe({
//       next: (celdaCreada) => {
//         this.celdas.push(celdaCreada);
//         this.nuevaCelda = { nombre: '', estado: 'disponible' };
//         this.mostrarFormulario = false;
//       },
//       error: (err) => console.error('Error al crear celda:', err)
//     });

//   }








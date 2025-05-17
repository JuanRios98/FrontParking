import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-parqueo',
  standalone: false,
  templateUrl: './crear-parqueo.component.html',
  styleUrl: './crear-parqueo.component.css'
})
export class CrearParqueoComponent {

  formParqueo!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formParqueo = this.fb.group({
      placa: ['', Validators.required],
      tipoVehiculo: ['', Validators.required],
      fechaEntrada: [this.getNowDateTimeLocal(), Validators.required]
    });
  }

  getNowDateTimeLocal(): string {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  }

  onSubmit(): void {
    if (this.formParqueo.valid) {
      const datos = this.formParqueo.value;
      console.log('Formulario enviado:', datos);
      // Aquí luego llamaremos al servicio para registrar
    }}

}

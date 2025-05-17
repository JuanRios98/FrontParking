import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearParqueoComponent } from './crear-parqueo/crear-parqueo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'Crear-parqueo',
    component: CrearParqueoComponent
  }
]


@NgModule({
  declarations: [
    CrearParqueoComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)

  ]
})
export class ParqueoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeldaComponent } from './celda/celda.component';
import { Routes, RouterModule } from '@angular/router';
import { CrearCeldaComponent } from './crear-celda/crear-celda.component';
import { FormsModule } from '@angular/forms';
import { CrearParqueoComponent } from '../parqueo/crear-parqueo/crear-parqueo.component';
import { ParqueoModule } from '../parqueo/parqueo.module';
import { DetalleCeldaComponent } from './detalle-celda/detalle-celda.component';


const ROUTES: Routes = [
  {
    path: '',
    component: CeldaComponent
  }
  

]


@NgModule({
  declarations: [
    CeldaComponent,
    CrearCeldaComponent,
    DetalleCeldaComponent,
    


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ParqueoModule
  ]
})
export class CeldaModule { }

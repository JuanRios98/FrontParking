import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeldaComponent } from './celda/celda.component';
import { Routes, RouterModule } from '@angular/router';
import { CrearCeldaComponent } from './crear-celda/crear-celda.component';
import { FormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {
    path: '',
    component: CeldaComponent
  },
  {
    path: 'crear',
    component: CrearCeldaComponent
  },
  {
    
  }

]


@NgModule({
  declarations: [
    CeldaComponent,
    CrearCeldaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ]
})
export class CeldaModule { }

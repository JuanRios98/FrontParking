import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { CeldaModule } from '../celda/celda.module';


const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path:'celda', loadChildren: () => import('../celda/celda.module').then(m => m.CeldaModule)},
      {path:'cliente', loadChildren: () => import('../cliente/cliente.module').then(m => m.ClienteModule)},
      {path: 'parqueo', loadChildren: () => import('../parqueo/parqueo.module').then(m => m.ParqueoModule)},
      

    ]
  }

]


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ClienteComponent,
    
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class ClienteModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ClienteComponent } from './cliente/cliente.component';
import { ParqueoModule } from './parqueo/parqueo.module';
import { CeldaModule } from './celda/celda.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParqueoModule,
    CeldaModule,
    LayoutModule
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

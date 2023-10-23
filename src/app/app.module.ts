import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPaginaComponent } from './components/form-pagina/form-pagina.component';
import { NotificadorService } from './services/notificador.service';

@NgModule({
  declarations: [
    AppComponent,
    FormPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NotificadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducacionService } from './educacion/educacion.service';
import { EducacionComponent } from './educacion/educacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienciaService } from './experiencia/experiencia.service';
import { PerfilService } from './perfil/perfil.service';
import { HabilidadComponent } from './habilidad/habilidad.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { HabilidadService } from './habilidad/habilidad.service';
import { ProyectoService } from './proyecto/proyecto.service';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    NavbarComponent,
    ExperienciaComponent,
    FooterComponent,
    PerfilComponent,
    HabilidadComponent,
    ProyectoComponent,
    LoginComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PerfilService,
    ExperienciaService,
    EducacionService,
    HabilidadService,
    ProyectoService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { TemplateComponent } from './template/template.component';
import { AcademicComponent } from './pages/academic/academic.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { ShopComponent } from './pages/shop/shop.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent,
    AcademicComponent,
    AdministrationComponent,
    ShopComponent,
    EstudiantesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

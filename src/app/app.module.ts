import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { JegyComponent } from './pages/jegy/jegy.component';
import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';
import { KornyezetvedelemComponent } from './pages/kornyezetvedelem/kornyezetvedelem.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    KezdolapComponent,
    JegyComponent,
    KapcsolatComponent,
    KornyezetvedelemComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

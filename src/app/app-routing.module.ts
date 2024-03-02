import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { JegyComponent } from './pages/jegy/jegy.component';
import { KornyezetvedelemComponent } from './pages/kornyezetvedelem/kornyezetvedelem.component';
import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:'', component:KezdolapComponent},
  {path:'jegy', component:JegyComponent},
  {path:'kornyezetvedelem', component:KornyezetvedelemComponent},
  {path:'kapcsolat', component:KapcsolatComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

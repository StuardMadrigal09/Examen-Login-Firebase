import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch:'full' }, 
{path: 'login', component: LoginComponent },
{path: 'dashboard', component: DashboardComponent},
{path: 'registrar-usuario', component: RegistrarUsuarioComponent},
{path: '**', redirectTo: 'login', pathMatch:'full' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

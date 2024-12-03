import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [

    { path: 'login', component: LoginComponent }, // Ruta de login
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Ruta protegida
    { path: '**', redirectTo: 'login' }, // Ruta por defecto

];

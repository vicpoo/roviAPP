import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token'); // Verificar si el token existe
    if (!token) {
      alert('No tienes acceso, por favor inicia sesión primero.');
      this.router.navigate(['/login']); // Redirigir al login si no hay token
      return false; // Bloquear acceso
    }
    return true; // Permitir acceso si hay un token
  }
}

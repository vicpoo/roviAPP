import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule],
})
export class LoginComponent {
  correo = ''; // Variable para el correo
  password = ''; // Variable para la contraseña

  constructor(private router: Router) {}

  login(): void {
    // Validar que el usuario haya ingresado un correo y una contraseña
    if (this.correo.trim() === '' || this.password.trim() === '') {
      alert('Por favor, ingresa un correo y contraseña válidos.');
      return; // No continúa si los campos están vacíos
    }

    // Guardar el token en localStorage después de ingresar datos válidos
    localStorage.setItem('token', 'fake-token'); // Generar token
    alert('Inicio de sesión exitoso.');
    this.router.navigate(['/home']); // Redirigir al home
  }
}

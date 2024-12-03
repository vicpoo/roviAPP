import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { User } from '../../interfaces/user.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule], // Importar FormsModule para usar ngModel
})
export class RegisterComponent {
  user: User = {
    nombre: '',
    username: '',
    correo: '',
    contrasena: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.user).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => console.error('Registration failed:', err),
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule], // Importa FormsModule y RouterModule
})
export class LoginComponent {
  username = '';
  contrasena = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.contrasena).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/protected']);
      },
      error: (err) => console.error('Login failed:', err),
    });
  }
}

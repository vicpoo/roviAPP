import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/user'; // Cambia por tu URL real

  constructor(private http: HttpClient) {}

  login(username: string, contraseña: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, contraseña });
  }

  register(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Comprueba si hay un token
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}

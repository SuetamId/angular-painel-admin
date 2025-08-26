import { Injectable } from '@angular/core';
import { User } from '../../core/ domain/user';

@Injectable({ providedIn: 'root' })
export class MockUsersService {
  private users: User[] = [
    { id: 1, name: 'Mateus', email: 'mateus@test.com', role: 'Admin' },
    { id: 2, name: 'Ana', email: 'ana@test.com', role: 'User' },
    { id: 3, name: 'Lucas', email: 'lucas@test.com', role: 'User' },
  ];

  getUsers(): User[] {
    return this.users;
  }
}

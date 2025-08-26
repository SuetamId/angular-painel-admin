import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  template: `
    <h2 class="logo">Meu Painel</h2>
    <mat-nav-list>
      <a mat-list-item routerLink="/dashboard" routerLinkActive="active-link">
        <mat-icon mat-list-icon>dashboard</mat-icon>
        Dashboard
      </a>
      <a mat-list-item routerLink="/users" routerLinkActive="active-link">
        <mat-icon mat-list-icon>group</mat-icon>
        Users
      </a>
      <a mat-list-item routerLink="/products" routerLinkActive="active-link">
        <mat-icon mat-list-icon>store</mat-icon>
        Products
      </a>
    </mat-nav-list>
  `,
  styleUrls: ['./sidebar.component.scss'], // Crie este arquivo
  standalone: true,
  imports: [MatListModule, RouterModule, MatIconModule],
})
export class SidebarComponent {}

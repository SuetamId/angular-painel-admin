import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../core/ domain/user';
import { MockUsersService } from '../../infrastructure/services/mock-users.service';

// NOVAS IMPORTAÇÕES
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips'; // Para o visual do "Perfil"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html', // Vamos usar um arquivo separado para o template
  styleUrls: ['./users.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
  ],
})
export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  dataSource = new MatTableDataSource<User>(); // Use o DataSource!

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: MockUsersService) {}

  ngOnInit() {
    this.dataSource.data = this.userService.getUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Conecta o paginador
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

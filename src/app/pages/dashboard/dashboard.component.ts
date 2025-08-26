import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Serviços
import { MockUsersService } from '../../infrastructure/services/mock-users.service';
import { MockProductsService } from '../../infrastructure/services/mock-products.service';
import { MockChartService } from '../../infrastructure/services/mock-chart.service'; // <-- Importe o novo serviço

// Componentes
import { StatsCardComponent } from '../../presentation/components/stats-card/stats-card';
import { User } from '../../core/ domain/user';
import { Product } from '../../core/ domain/product';

// Módulos do Material e Gráficos
import { MatCardModule } from '@angular/material/card';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts'; // <-- Importe o módulo de gráficos
import { ChartData } from '../../core/ domain/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    StatsCardComponent,
    MatCardModule, // Adicione MatCardModule
    NgxChartsModule, // Adicione NgxChartsModule
  ],
})
export class DashboardComponent implements OnInit {
  users!: User[];
  products!: Product[];

  // Propriedades para o nosso gráfico
  newUsersData!: ChartData[];
  newProductsData!: ChartData[];
  chartColorScheme = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#3f51b5', '#4caf50', '#ff9800', '#f44336', '#673ab7', '#2196f3'],
  };

  constructor(
    private userService: MockUsersService,
    private productService: MockProductsService,
    private chartService: MockChartService // <-- Injete o novo serviço
  ) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.products = this.productService.getProducts();
    this.newUsersData = this.chartService.getNewUsersData(); // <-- Busque os dados do gráfico
    this.newProductsData = this.chartService.getNewProductsData(); // <-- Busque os dados do gráfico
  }
}

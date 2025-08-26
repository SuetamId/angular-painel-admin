import { Injectable } from '@angular/core';
import { ChartData } from '../../core/ domain/chart';

// Interface para garantir o formato que o ngx-charts espera


@Injectable({ providedIn: 'root' })
export class MockChartService {
  getNewUsersData(): ChartData[] {
    return [
      { name: 'Janeiro', value: 12 },
      { name: 'Fevereiro', value: 18 },
      { name: 'Março', value: 25 },
      { name: 'Abril', value: 22 },
      { name: 'Maio', value: 30 },
      { name: 'Junho', value: 28 },
    ];
  }

  getNewProductsData(): ChartData[] {
    return [
      { name: 'Janeiro', value: 2 },
      { name: 'Fevereiro', value: 1 },
      { name: 'Março', value: 2 },
      { name: 'Abril', value: 3 },
      { name: 'Maio', value: 5 },
      { name: 'Junho', value: 10 },
    ];
  }
}

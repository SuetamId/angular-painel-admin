import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stats-card',
  template: `
    <mat-card class="stats-card">
      <mat-card-header>
        <div mat-card-avatar>
          <mat-icon class="icon">{{ icon }}</mat-icon>
        </div>
        <mat-card-title>{{ title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p class="value">{{ value }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./stats-card.component.scss'], // Crie este arquivo
  standalone: true,
  imports: [MatCardModule, MatIconModule],
})
export class StatsCardComponent {
  @Input() title = '';
  @Input() value: number | string = '';
  @Input() icon = '';
}

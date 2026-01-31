import { Component, signal, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Campaign {
  id: number;
  name: string;
  product: string;
  status: 'draft' | 'active' | 'paused';
  created: Date;
  adsCount: number;
}

@Component({
  selector: 'app-campaigns-page',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule,
    DatePipe  // Fixes | date pipe
  ],
  templateUrl: './campaigns-page.component.html',
  styleUrl: './campaigns-page.component.css'
})
export class CampaignsPageComponent {
  campaigns = signal<Campaign[]>([
    { id: 1, name: 'GlowVibe Serum Launch', product: 'Hydrating Serum', status: 'active', created: new Date('2026-01-20'), adsCount: 5 },
    { id: 2, name: 'Serumly Winter Promo', product: 'Anti-Aging Cream', status: 'draft', created: new Date('2026-01-25'), adsCount: 0 },
    { id: 3, name: 'GlowVibe Reel Ads', product: 'Vitamin C Serum', status: 'paused', created: new Date('2026-01-15'), adsCount: 3 }
  ]);

  searchTerm = '';
  
  // Computed for reactive filtering
  filteredCampaigns = computed(() => {
    const term = this.searchTerm.toLowerCase();
    return this.campaigns().filter(c => 
      c.name.toLowerCase().includes(term) || 
      c.product.toLowerCase().includes(term)
    );
  });

  onSearch() {
    // Trigger reactivity
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }
}

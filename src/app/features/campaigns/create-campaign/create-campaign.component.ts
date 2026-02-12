import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 1. Import RouterModule

@Component({
  selector: 'app-create-campaign',
  standalone: true, // Ensure standalone is true if using imports directly
  imports: [RouterModule], // 2. Add RouterModule here
  templateUrl: './create-campaign.component.html',
  styleUrl: './create-campaign.component.css'
})
export class CreateCampaignComponent {
  // Logic for the backend (M3) can be added here later
}
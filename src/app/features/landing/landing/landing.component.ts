import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For basics like *ngIf
import { RouterLink } from '@angular/router';   // 1. ADD THIS FOR LINKS

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],        
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent { }
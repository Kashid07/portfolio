import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips'; // Import MatChipsModule for skills section
import { CommonModule } from '@angular/common'; 
import { TimelineModule } from 'primeng/timeline';
import { FormsModule } from '@angular/forms';

interface EventItem {
  Board?: string;
  Place?: string;
  percentage?: string;
  icon?: string;
  color?: string;
  image?: string;
  date?: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    TimelineModule,
    FormsModule // Add MatChipsModule to imports
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  events: EventItem[];

  constructor() {
      this.events = [
          { Board: 'SSC', Place: "St. Paul's High School",percentage:'68%', icon: 'pi pi-shopping-cart', color: '#9C27B0',date:'2019' },
          { Board: 'HSC', Place: 'Sardar Vallabhai Patel Vidyalaya',percentage:'71%', icon: 'pi pi-cog', color: '#673AB7',date:'2021' },
          { Board: 'Graduation', Place: 'Chetana College Bandra(East)',percentage:'7.5 C.G.P.A', icon: 'pi pi-shopping-cart', color: '#FF9800',date: '2024'},
          // { Board: 'Delivered', Place: '16/10/2020 10:00',percentage:'', icon: 'pi pi-check', color: '#607D8B' }
      ];
  }
  FrontEndskills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'Angular', level: 60 },
    { name: 'Bootstrap', level: 90 }
  ];
  BackEndskills = [
    { name: 'Java', level: 80 },
     { name: 'JavaScript', level: 60 }
  ];
   Consultancy = [
    { name: 'Risk Management', level: 80 },
     { name: 'GRC', level: 70 },
     { name: 'SDLC', level: 80 },
     { name: 'Software Development', level: 90 },
     { name: 'Agile Methodologies', level: 80 },
     { name: 'Project Management', level: 70 },
     { name: 'Data Analysis', level: 60 },
     { name: 'Security Audit', level: 70 },
     { name: 'Quality Assurance', level: 80 },
     { name: 'Cybersecurity', level: 90 },
     
  ];
  
}

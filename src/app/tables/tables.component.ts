import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

interface Person {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
})
export class TablesComponent implements OnInit {
  data: Person[] = [];
  totalItems = 100;
  pageSize = 10;
  currentPage = 1;

  ngOnInit(): void {
    this.generateDummyData();
  }

  generateDummyData(): void {
    for (let i = 1; i <= this.totalItems; i++) {
      this.data.push({
        id: i,
        name: `Person ${i}`,
        age: Math.floor(Math.random() * 50) + 20, // Random age between 20 and 69
      });
    }
  }

  pageChanged(event: number) {
    this.currentPage = event;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-actions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-actions.html',
  styleUrls: ['./user-actions.css']
})
export class UserActions {

  employeeName: string = '';
  dateFrom: string = '';
  dateTo: string = '';

  hasResults: boolean = false;

  search() {
    // Stub: simulate search
    this.hasResults = true;
  }
}
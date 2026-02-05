import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-case-actions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './case-actions.html',
  styleUrls: ['./case-actions.css']
})
export class CaseActions {

  year: string = '';
  court: string = '';
  caseType: string = '';
  caseNumber: string = '';

  caseNumbersEnabled: boolean = false;
  hasResults: boolean = false;

  onFiltersChange() {
    this.caseNumbersEnabled =
      !!(this.year && this.court && this.caseType);
  }

  search() {
    this.hasResults = true;
  }
}
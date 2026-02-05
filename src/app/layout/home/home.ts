import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from '../sidebar/sidebar';
import { UserActions } from '../../features/user-actions/user-actions';
import { CaseActions } from '../../features/case-actions/case-actions';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    UserActions,
    CaseActions
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomePage {

  // active section (controls content + sidebar state)
  activeSection: 'user' | 'case' = 'user';

  // mobile sidebar toggle
  isSidebarOpen: boolean = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onSectionChange(section: 'user' | 'case'): void {
    this.activeSection = section;

    // close sidebar after selection (mobile UX)
    this.isSidebarOpen = false;
  }
}

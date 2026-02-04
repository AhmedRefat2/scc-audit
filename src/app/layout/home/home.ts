import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomePage {

  activeSection: 'user' | 'case' = 'user';
  pageTitle: string = 'إجراءات المستخدم';

  onSectionChange(section: 'user' | 'case') {
    this.activeSection = section;
    this.pageTitle =
      section === 'user'
        ? 'إجراءات المستخدم'
        : 'إجراءات الدعوى';
  }
}

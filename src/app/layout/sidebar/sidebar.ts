import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {

  @Output() sectionChange = new EventEmitter<'user' | 'case'>();

  selectUser() {
    this.sectionChange.emit('user');
  }

  selectCase() {
    this.sectionChange.emit('case');
  }
}

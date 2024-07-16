import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgbCollapseModule, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isCollapsedMenu = true;

  toggleCollapseMenu = () => (this.isCollapsedMenu = !this.isCollapsedMenu);
}

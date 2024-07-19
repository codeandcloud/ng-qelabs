import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  NgbCollapseModule,
  NgbOffcanvas,
  NgbOffcanvasConfig,
  NgbOffcanvasOptions,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgbCollapseModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private offcanvasService = inject(NgbOffcanvas);
  private offcanvasConfig = inject(NgbOffcanvasConfig);
  closeResult = '';

  constructor() {
    this.offcanvasConfig.ariaLabelledBy = 'offcanvas-menu';
    this.offcanvasConfig.panelClass = 'offcanvas-panel';
    this.offcanvasConfig.position = 'end';
  }

  openSideMenu(content: TemplateRef<any>) {
    this.offcanvasService.open(content);
  }
}

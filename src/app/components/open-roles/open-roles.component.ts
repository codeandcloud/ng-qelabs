import { afterNextRender, Component, inject, input } from '@angular/core';
import { Role } from '../../models/role.type';
import { QeButtonComponent } from '../qe-button/qe-button.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-open-roles',
  standalone: true,
  imports: [QeButtonComponent],
  templateUrl: './open-roles.component.html',
  styleUrl: './open-roles.component.css',
})
export class OpenRolesComponent {
  private router = inject(Router);
  roles = input.required<Role[]>();
  buttonText = 'Apply Now';
  isButtonDisabled!: false;

  handleButtonClick = () => {
    this.router.navigate(['/careers'], { fragment: 'job-application-form' });
  };
}

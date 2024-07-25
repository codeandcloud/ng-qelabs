import { Component, input } from '@angular/core';
import { Role } from '../../models/role.type';
import { QeButtonComponent } from '../qe-button/qe-button.component';

@Component({
  selector: 'app-open-roles',
  standalone: true,
  imports: [QeButtonComponent],
  templateUrl: './open-roles.component.html',
  styleUrl: './open-roles.component.css',
})
export class OpenRolesComponent {
  roles = input.required<Role[]>();
  buttonText = 'Apply Now';
  isButtonDisabled!: false;

  handleButtonClick = () => {
    console.log('data');
  };
}

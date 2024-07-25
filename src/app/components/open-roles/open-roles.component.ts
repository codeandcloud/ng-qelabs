import { Component, input } from '@angular/core';
import { Role } from '../../models/role.type';

@Component({
  selector: 'app-open-roles',
  standalone: true,
  imports: [],
  templateUrl: './open-roles.component.html',
  styleUrl: './open-roles.component.css',
})
export class OpenRolesComponent {
  role = input.required<Role>();
}

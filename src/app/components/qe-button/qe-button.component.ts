import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-qe-button',
  standalone: true,
  imports: [],
  templateUrl: './qe-button.component.html',
  styleUrl: './qe-button.component.css',
})
export class QeButtonComponent {
  buttonText = input.required<string>();
  disabled = input.required<boolean>();
  buttonClicked = output<void>();

  handleButtonClick() {
    this.buttonClicked.emit();
  }
}

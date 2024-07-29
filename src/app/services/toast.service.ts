import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  showSuccessToast(message: string) {
    this.show(message, { classname: 'bg-success text-light', delay: 5000 });
  }

  showErrorToast(message: string) {
    this.show(message, { classname: 'bg-danger text-light', delay: 5000 });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}

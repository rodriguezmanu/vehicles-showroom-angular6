import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastrsService {
  constructor(private toastr: ToastrService) {}

  options = {
    positionClass: 'toast-top-center'
  };

  /**
   * Show success message
   *
   * @param {String} message
   * @memberof ToastrsService
   */
  showSuccess(message: string): void {
    this.toastr.success(message, 'Great!', this.options);
  }

  /**
   * Show error message
   *
   * @param {Object} message
   * @memberof ToastrsService
   */
  showError(error): void {
    this.toastr.error(error.message, 'Error!', this.options);
  }
}

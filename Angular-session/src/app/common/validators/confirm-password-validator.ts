import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ConfirmPasswordValidator {
  static validate(formGroup: AbstractControl<any>): ValidationErrors | null {
    const { password, confirmPassword } = formGroup.value;
    console.log({ password, confirmPassword });
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordNotMatch: true });
      return { passwordNotMatch: true };
    }
    return null;
  }
}

import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(
    control: AbstractControl<any, any>
  ): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') != -1) {
      return { spaceContains: true };
    }
    return null;
  }


}

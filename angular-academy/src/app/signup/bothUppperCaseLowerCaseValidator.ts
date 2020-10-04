import { AbstractControl, ValidatorFn } from '@angular/forms';

export function bothUpperCaseLowerCaseValidator(): ValidatorFn {
  return (control : AbstractControl): {[key: string]: any} | null => {
    return control.value === control.value.toUpperCase() || control.value === control.value.toLowerCase() ? {hasNotBothUpperCaseLowerCase: {value: control.value}}: null;
  }
}

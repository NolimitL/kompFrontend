import { FormControl, ValidationErrors } from '@angular/forms';

const phoneAllowed = [
  '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
]

export class CustomValidators{
  static phoneNotAllowed(control: FormControl): ValidationErrors{
    if (!phoneAllowed.includes(control.value)) {
      return {
        phoneAllowed: false
      }
    } else {
      return null
    }
  }
}

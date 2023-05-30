import { ValidatorFn, AbstractControl } from '@angular/forms';

export function imageValidator(maxSize: number, allowedTypes: string[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const file = control.value;
    if (file) {

      const fileSize = file.size;
      const fileType = file.type;


      const isAllowedType = allowedTypes.includes(fileType);
      if (!isAllowedType){
        return { 'invalidExtension': { value: file } };
      }
      if (fileSize > maxSize || !isAllowedType) {
        return { 'maxSize': { value: file } };
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result;
        control.setValue(dataUrl);
      };
      reader.readAsDataURL(file);
    }
    return null;
  };
}

import { validateSync } from 'class-validator';
import {
  FieldsErros,
  ValidatorFieldsInterface,
} from './validators-fields.interface';

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated>
{
  errors: FieldsErros = null;
  validatedData: PropsValidated = null;
  validate(data: any): boolean {
    const erros = validateSync(data);
    if (erros.length) {
      this.errors = {};
      for (const error of erros) {
        const field = error.property;
        this.errors[field] = Object.values(error.constraints);
      }
    } else {
      this.validatedData = data;
    }
    return !erros.length;
  }
}

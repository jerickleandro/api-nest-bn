import { FieldsErros } from '../validators/validators-fields.interface';

export class ValidatorError extends Error {}

export class EntityValidatorError extends Error {
  constructor(public error: FieldsErros) {
    super('Entity Validation Error');
    this.name = 'EntityValidatorError';
  }
}

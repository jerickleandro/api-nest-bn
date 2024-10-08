import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type stubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<stubProps> {}

describe('UserEntity unit tests', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const id = 'a430093c-488d-4a90-8773-4d113bc6ee3e';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('Should convert a entity to JSON', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const id = 'a430093c-488d-4a90-8773-4d113bc6ee3e';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});

import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '../../../testing/helpers/user-data-builder';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;
  beforeEach(() => {
    UserEntity.validate = jest.fn();
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  });

  it('Should test the constructor method', () => {
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Should return name', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  });

  it('Should return email', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  });

  it('Should return password', () => {
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toBe('string');
  });

  it('Should return createdAt', () => {
    expect(sut.props.createdAt).toBeDefined();
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Should set name', () => {
    const newName = 'Test Name';
    expect(sut.props.name).not.toEqual(newName);
    sut.updateName(newName);
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.props.name).toEqual(newName);
  });

  it('Should set password', () => {
    const newpassword = 'Test password';
    expect(sut.props.password).not.toEqual(newpassword);
    sut.updatePassword(newpassword);
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.props.password).toEqual(newpassword);
  });
});

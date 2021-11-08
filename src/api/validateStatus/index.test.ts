import 'jest';
import validateStatus from '.';

describe('validateStatus', () => {
  it('should be a function', () => {
    expect(typeof validateStatus).toBe('function');
  });

  it('should return false', () => {
    expect(validateStatus(300)).toBe(false);
    expect(validateStatus(400)).toBe(false);
  });

  it('should return true', () => {
    expect(validateStatus(200)).toBe(true);
    expect(validateStatus(201)).toBe(true);
  });
});

import getResourceValue from '../get-resource-value';
import planetMock from '../../mocks/planet.mock';

describe('formulas/getResourceValue', () => {
  it('should get resource value', () => {
    const value = getResourceValue({
      resource: planetMock.resources[0],
      from: 1578163235568,
      to: 1578163235668,
    });

    expect(typeof value).toBe('number');
  });

  it('should throw an error if "from" date is higher than "to" date', () => {
    expect(() => {
      getResourceValue({
        resource: planetMock.resources[0],
        from: 1578163238568,
        to: 1578163235568,
      });
    }).toThrow();
  });
});

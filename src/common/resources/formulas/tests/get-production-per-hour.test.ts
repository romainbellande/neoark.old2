import getProductionPerFour from '../get-production-per-hour';
import planetMock from '../../mocks/planet.mock';

describe('formulas/getProductionPerFour', () => {
  it('shoud get production per hour', () => {
    expect(typeof getProductionPerFour(planetMock.resources[0])).toBe('number');
  });
});

import getProductionPerFour from '../get-production-per-hour';
import planetMock from '../../mocks/planet.mock';

describe('formulas/getProductionPerFour', () => {
  it('shoud get production per hour', () => {
    const { code, level } = planetMock.resources[0];
    expect(typeof getProductionPerFour(code, level)).toBe('number');
  });
});

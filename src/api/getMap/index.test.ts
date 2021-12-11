import 'jest';
import { handleGetMap } from '.';

describe('getMap', () => {
  it('should throw an error', async () => {
    try {
      await handleGetMap({
        apiKey: '',
        mapId: '',
        spaceId: '',
      });
    } catch (err: any) {
      expect(err.message).toEqual('Request failed with status code 403');
    }
  });
});

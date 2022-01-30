import 'jest';
import { handleGetMap } from '.';

describe('getMap', () => {
  it('should throw an apiKey error', async () => {
    try {
      await handleGetMap({
        apiKey: '',
        mapId: 'test',
        spaceId: 'test',
      });
    } catch (err: any) {
      expect(err.message).toEqual('apiKey is a required field');
    }
  });

  it('should throw an mapId error', async () => {
    try {
      await handleGetMap({
        apiKey: 'test',
        mapId: '',
        spaceId: 'test',
      });
    } catch (err: any) {
      expect(err.message).toEqual('mapId is a required field');
    }
  });

  it('should throw an spaceId error', async () => {
    try {
      await handleGetMap({
        apiKey: 'test',
        mapId: 'test',
        spaceId: '',
      });
    } catch (err: any) {
      expect(err.message).toEqual('spaceId is a required field');
    }
  });
});

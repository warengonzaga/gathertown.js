import 'jest';
import { handleGetEmailGuestlist } from '.';

describe('getEmailGuestlist', () => {
  it('should throw an apiKey error', async () => {
    try {
      await handleGetEmailGuestlist({
        apiKey: '',
        spaceId: 'test',
      });
    } catch (err: any) {
      expect(err.message).toEqual('apiKey is a required field');
    }
  });

  it('should throw an spaceId error', async () => {
    try {
      await handleGetEmailGuestlist({
        apiKey: 'test',
        spaceId: '',
      });
    } catch (err: any) {
      expect(err.message).toEqual('spaceId is a required field');
    }
  });
});

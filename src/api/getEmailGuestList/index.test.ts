import 'jest';
import { handleGetEmailGuestlist } from '.';

describe('getEmailGuestlist', () => {
  it('should throw an error', async () => {
    try {
      await handleGetEmailGuestlist({
        apiKey: '',
        spaceId: '',
      });
    } catch (err: any) {
      expect(err.message).toEqual('apiKey is a required field');
    }
  });
});

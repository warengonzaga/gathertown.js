import 'jest';
import { handleCreateSpace } from '.';

describe('createSpace', () => {
  it('should throw an error', async () => {
    try {
      await handleCreateSpace({
        apiKey: '',
        name: 'sample space name',
      });
    } catch (err: any) {
      expect(err.message).toEqual('You must provide either a map or a sourceSpace');
    }
  });
});

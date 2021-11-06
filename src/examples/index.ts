import { useGather } from '../index';

// can be ran directly with `npx ts-node src/examples/index.ts`

export const getMapSample = async () => {
  const { getMap } = useGather('YOUR_API_KEY');
  const res = await getMap({
    spaceId: 'gL2sTLbVCqghDwB8/gathertown_js',
    mapId: 'office-cozy',
  });

  return res;
};

export const getEmailGuestlistSample = async () => {
  const { getEmailGuestlist } = useGather('YOUR_API_KEY');
  const res = await getEmailGuestlist({
    spaceId: 'gL2sTLbVCqghDwB8/gathertown_js',
  });

  return res;
};

export const createRoomSample = async () => {
  const { createRoom } = useGather('tBUTDQ6rF8MkOy8X');

  const res = await createRoom({
    name: 'test-space-1',
    // sourceSpace: 'gL2sTLbVCqghDwB8/gathertown_js',
    map: 'bar-beach',
    reason: 'testing space 1',
  });

  return res;
};

const main = async () => {
  console.log(await createRoomSample());
};

main().catch(console.error);

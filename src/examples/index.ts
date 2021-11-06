import { useGather } from '../index';

// can be ran directly with `npx ts-node src/examples/index.ts`

export const getEmailGuestlistSample = async () => {
  const { getEmailGuestlist } = useGather('YOUR_API_KEY');

  const res = await getEmailGuestlist({
    spaceId: 'gL2sTLbVCqghDwB8/gathertown_js',
  });

  return res;
};

export const getMapSample = async () => {
  const { getMap } = useGather('YOUR_API_KEY');

  const res = await getMap({
    spaceId: 'gL2sTLbVCqghDwB8/gathertown_js',
    mapId: 'office-cozy',
  });

  return res;
};

export const setMapSample = async () => {
  const { setMap, getMap } = useGather('tBUTDQ6rF8MkOy8X');

  // SOURCE
  const mapContent = await getMap({
    spaceId: 'gL2sTLbVCqghDwB8/gathertown_js',
    mapId: 'office-cozy',
  });

  // DESTINATION
  const res = await setMap({
    spaceId: 'tiWyyxlRs6Bl1dVS/test-space-1',
    mapId: 'bar-beach',
    mapContent,
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
  console.log(await setMapSample());
};

main().catch(console.error);

import { useGather } from '../index';

// can be ran directly with `npx ts-node src/examples/index.ts`

const API_KEY = 'tBUTDQ6rF8MkOy8X';

export const createRoomSample = async () => {
  const { createRoom } = useGather(API_KEY);

  const res = await createRoom({
    name: 'test-space-1',
    // sourceSpace: 'gL2sTLbVCqghDwB8/gathertown_js',
    map: 'bar-beach',
    reason: 'testing space 1',
  });

  return res;
};

export const getEmailGuestlistSample = async () => {
  const { getEmailGuestlist } = useGather(API_KEY);

  const res = await getEmailGuestlist({
    spaceId: 'gL2sTLbVCqghDwB8/gathertown_js',
  });

  return res;
};

export const getMapSample = async () => {
  const { getMap } = useGather(API_KEY);

  const res = await getMap({
    spaceId: 'gL2sTLbVCqghDwB8/gathertown_js',
    mapId: 'office-cozy',
  });

  return res;
};

export const setMapSample = async () => {
  const { setMap, getMap } = useGather(API_KEY);

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

export const setEmailGuestlistSample = async () => {
  const { setEmailGuestlist } = useGather(API_KEY);

  const res = await setEmailGuestlist({
    spaceId: 'gL2sTLbVCqghDwB8/gathertown_js',
    guestlist: {
      'cjugs03@gmail5.com': {
        name: 'John Doe',
      },
      'joogie@gmail4.com': {
        name: 'Sample 1',
      },
    },
  });

  return res;
};

const main = async () => {
  console.log(await setEmailGuestlistSample());
  console.log(await getEmailGuestlistSample());
};

main().catch(console.error);

import { useGather } from '../index';

// can be ran directly with `npx ts-node src/examples/index.ts`

const API_KEY = 'API_KEY_HERE';
const SPACE_ID_1 = 'gL2sTLbVCqghDwB8/gathertown_js';
const SPACE_ID_2 = 'tiWyyxlRs6Bl1dVS/test-space-1';

export const createRoomSample = async () => {
  const { createRoom } = useGather(API_KEY);

  const res = await createRoom({
    name: 'test-space-1',
    map: 'bar-beach', // has autocomplete for available map templates
    reason: 'testing space 1',
  });

  return res;
};

export const getEmailGuestlistSample = async () => {
  const { getEmailGuestlist } = useGather(API_KEY);

  const res = await getEmailGuestlist({
    spaceId: SPACE_ID_1,
  });

  return res;
};

export const getMapSample = async () => {
  const { getMap } = useGather(API_KEY);

  const res = await getMap({
    spaceId: SPACE_ID_1,
    mapId: 'office-cozy',
  });

  return res;
};

export const setMapSample = async () => {
  const { setMap, getMap } = useGather(API_KEY);

  // SOURCE
  const mapContent = await getMap({
    spaceId: SPACE_ID_1,
    mapId: 'office-cozy',
  });

  // DESTINATION
  const res = await setMap({
    spaceId: SPACE_ID_2,
    mapId: 'bar-beach',
    mapContent,
  });

  return res;
};

export const setEmailGuestlistSample = async () => {
  const { setEmailGuestlist } = useGather(API_KEY);

  const res = await setEmailGuestlist({
    spaceId: SPACE_ID_1,
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
  console.log(await getMapSample());
  // run other samples here
  // can be ran directly with `npx ts-node src/examples/index.ts`
};

main().catch(console.error);

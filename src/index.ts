import { CreateRoomProps, handleCreateRoom } from './api/createRoom';
import { GetEmailGuestlistProps, handleGetEmailGuestlist } from './api/getEmailGuestList';
import { GetMapProps, handleGetMap } from './api/getMap';

interface IGather {
  getMap(props: Omit<GetMapProps, 'apiKey'>): Promise<any>;
  getEmailGuestlist(props: Omit<GetEmailGuestlistProps, 'apiKey'>): Promise<any>;
  createRoom(props: Omit<CreateRoomProps, 'apiKey'>): Promise<any>;
}

function Gather(initialApiKey: string): IGather {
  const getEmailGuestlist: IGather['getEmailGuestlist'] = async ({ spaceId }) => {
    const res = await handleGetEmailGuestlist({
      spaceId,
      apiKey: initialApiKey,
    });

    return res.data;
  };

  const getMap: IGather['getMap'] = async ({ mapId, spaceId }) => {
    const res = await handleGetMap({
      apiKey: initialApiKey,
      mapId,
      spaceId,
    });

    return res.data;
  };

  const createRoom: IGather['createRoom'] = async ({ name, map, reason, sourceSpace }) => {
    const res = await handleCreateRoom({
      apiKey: initialApiKey,
      name,
      map,
      reason,
      sourceSpace,
    });

    return res.data;
  };

  return {
    getEmailGuestlist,
    getMap,
    createRoom,
  };
}

export const useGather = (apiKey: string) => {
  return Gather(apiKey);
};

export default Gather;

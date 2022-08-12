import type { IGuest } from './types';
import { CreateSpaceProps, handleCreateSpace } from './api/createSpace';
import { GetEmailGuestlistProps, handleGetEmailGuestlist } from './api/getEmailGuestList';
import { GetMapProps, handleGetMap } from './api/getMap';
import { handleSetEmailGuestlist, SetEmailGuestlistProps } from './api/setEmailGuestlist';
import { SetMapProps, handleSetMap } from './api/setMap';

interface IGather {
  createSpace(props: Omit<CreateSpaceProps, 'apiKey'>): Promise<string>;
  getEmailGuestlist(props: Omit<GetEmailGuestlistProps, 'apiKey'>): Promise<IGuest>;
  getMap(props: Omit<GetMapProps, 'apiKey'>): Promise<any>;
  setMap(props: Omit<SetMapProps, 'apiKey'>): Promise<any>;
  setEmailGuestlist(props: Omit<SetEmailGuestlistProps, 'apiKey'>): Promise<IGuest>;
}

export function Gather(initialApiKey: string): IGather {
  const createSpace: IGather['createSpace'] = async ({ name, map, reason, sourceSpace }) => {
    const res = await handleCreateSpace({
      apiKey: initialApiKey,
      map,
      name,
      reason,
      sourceSpace,
    });

    return res.data;
  };

  const getEmailGuestlist: IGather['getEmailGuestlist'] = async ({ spaceId }) => {
    const res = await handleGetEmailGuestlist({
      apiKey: initialApiKey,
      spaceId,
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

  const setMap: IGather['setMap'] = async ({ mapId, spaceId, mapContent }) => {
    const res = await handleSetMap({
      apiKey: initialApiKey,
      mapContent,
      mapId,
      spaceId,
    });

    return res.data;
  };

  const setEmailGuestlist: IGather['setEmailGuestlist'] = async ({
    spaceId,
    guestlist,
    overwrite,
  }) => {
    const res = await handleSetEmailGuestlist({
      apiKey: initialApiKey,
      spaceId,
      guestlist,
      overwrite,
    });

    return res.data;
  };

  return {
    createSpace,
    getEmailGuestlist,
    getMap,
    setMap,
    setEmailGuestlist,
  };
}

export const useGather = (apiKey: string) => {
  return Gather(apiKey);
};

export default Gather;

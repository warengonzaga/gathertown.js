import api from './ApiBase';
import validateStatus from './validateStatus';

export interface SetMapProps {
  apiKey: string;
  mapId: string;
  spaceId: string;
  // TODO: get proper return type of getMap
  // ReturnType<typeof getMap>;
  mapContent: any;
}

export const handleSetMap = ({ apiKey, mapContent, mapId, spaceId }: SetMapProps) => {
  // Required params
  const formattedSpaceID = spaceId.replace(/\//gi, '\\');

  return api.post(
    'setMap',
    {
      apiKey,
      spaceId: formattedSpaceID,
      mapId,
      mapContent,
    },
    {
      validateStatus,
    }
  );
};

import api from './ApiBase';
import validateStatus from './validateStatus';
import { handleGetMap } from './getMap';

export interface SetMapProps {
  apiKey: string;
  spaceId: string;
  mapId: string;
  mapContent: ReturnType<typeof handleGetMap>;
}

export const handleSetMap = (data: SetMapProps) => {
  // Required params

  return api.post('setMap', data, {
    validateStatus,
  });
};

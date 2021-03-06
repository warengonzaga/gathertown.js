import api from './apiBase';
import validateStatus from './validateStatus';

export interface GetMapProps {
  apiKey: string;
  mapId: string;
  spaceId: string;
}

export const handleGetMap = ({ apiKey, mapId, spaceId }: GetMapProps) => {
  // TODO: Catch nullish value for params
  const formattedSpaceID = spaceId.replace(/\//gi, '\\');
  const _spaceId = '?spaceId=' + formattedSpaceID;
  const _mapId = '&mapId=' + mapId;
  const _apiKey = '&apiKey=' + apiKey;

  return api.get(`getMap${_spaceId}${_mapId}${_apiKey}`, {
    validateStatus,
  });
};

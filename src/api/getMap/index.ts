import api from '../apiBase';
import * as yup from 'yup';
import validateStatus from '../validateStatus';

export interface GetMapProps {
  apiKey: string;
  mapId: string;
  spaceId: string;
}

const getMapSchema = yup.object({
  apiKey: yup.string().required().trim(),
  mapId: yup.string().required().trim(),
  spaceId: yup.string().required().trim(),
});

export const handleGetMap = async (props: GetMapProps) => {
  try {
    const { apiKey, mapId, spaceId } = await getMapSchema.validate(props);

    const formattedSpaceID = spaceId.replace(/\//gi, '\\');
    const _spaceId = '?spaceId=' + formattedSpaceID;
    const _mapId = '&mapId=' + mapId;
    const _apiKey = '&apiKey=' + apiKey;

    return api.get(`getMap${_spaceId}${_mapId}${_apiKey}`, {
      validateStatus,
    });
  } catch (err) {
    const error: any = err;
    throw new Error(error.message);
  }
};

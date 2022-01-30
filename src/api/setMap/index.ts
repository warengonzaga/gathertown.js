import api from '../apiBase';
import * as yup from 'yup';
import validateStatus from '../validateStatus';

export interface SetMapProps {
  apiKey: string;
  mapId: string;
  spaceId: string;
  mapContent: any;
}

const setMapSchema = yup.object({
  apiKey: yup.string().required().trim(),
  mapId: yup.string().required().trim(),
  spaceId: yup.string().required().trim(),
  mapContent: yup.object().required(),
});

export const handleSetMap = async (props: SetMapProps) => {
  try {
    const { apiKey, mapContent, mapId, spaceId } = await setMapSchema.validate(props);
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
  } catch (err) {
    const error: any = err;
    throw new Error(error.message);
  }
};

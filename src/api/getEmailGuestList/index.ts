import type { IGuest } from '../../types';
import * as yup from 'yup';
import api from '../apiBase';
import validateStatus from '../validateStatus';

export interface GetEmailGuestlistProps {
  apiKey: string;
  spaceId: string;
}

const getEmailGuestListSchema = yup.object({
  apiKey: yup.string().required().trim(),
  spaceId: yup.string().required().trim(),
});

export const handleGetEmailGuestlist = async (props: GetEmailGuestlistProps) => {
  try {
    const { apiKey, spaceId } = await getEmailGuestListSchema.validate(props);
    const formattedSpaceID = spaceId.replace(/\//gi, '\\');
    const _spaceId = '?spaceId=' + formattedSpaceID;
    const _apiKey = '&apiKey=' + apiKey;

    return api.get<IGuest>(`getEmailGuestlist${_spaceId}${_apiKey}`, {
      validateStatus,
    });
  } catch (err) {
    const error: any = err;
    throw new Error(error.message);
  }
};

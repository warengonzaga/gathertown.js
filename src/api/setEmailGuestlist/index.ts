import type { IGuest } from '../../types';
import * as yup from 'yup';
import api from '../apiBase';
import validateStatus from '../validateStatus';

export interface SetEmailGuestlistProps {
  apiKey: string;
  spaceId: string;
  guestlist: IGuest;
  overwrite?: boolean;
}

const setEmailGuestListSchema = yup.object({
  apiKey: yup.string().required().trim(),
  spaceId: yup.string().required().trim(),
  guestlist: yup.object().required(),
  overwrite: yup.boolean().default(false),
});

export const handleSetEmailGuestlist = async (props: SetEmailGuestlistProps) => {
  try {
    const { apiKey, guestlist, overwrite, spaceId } = await setEmailGuestListSchema.validate(props);

    const formattedSpaceID = spaceId.replace(/\//gi, '\\');

    const data = JSON.stringify({
      apiKey,
      spaceId: formattedSpaceID,
      guestlist,
      overwrite,
    });

    return api.post<IGuest>('setEmailGuestlist', data, {
      validateStatus,
    });
  } catch (err) {
    const error: any = err;
    throw new Error(error.message);
  }
};

import type { IGuest } from '../types';
import api from './apiBase';
import validateStatus from './validateStatus';

export interface SetEmailGuestlistProps {
  apiKey: string;
  spaceId: string;
  guestlist: IGuest;
  overwrite?: boolean;
}

export const handleSetEmailGuestlist = ({
  apiKey,
  spaceId,
  guestlist,
  overwrite = false,
}: SetEmailGuestlistProps) => {
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
};

import type { IGuest } from '../types';
import api from './ApiBase';
import validateStatus from './validateStatus';

export interface GetEmailGuestlistProps {
  apiKey: string;
  spaceId: string;
}

export const handleGetEmailGuestlist = ({ apiKey, spaceId }: GetEmailGuestlistProps) => {
  // TODO: Catch nullish value for params
  const formattedSpaceID = spaceId.replace(/\//gi, '\\');
  const _spaceId = '?spaceId=' + formattedSpaceID;
  const _apiKey = '&apiKey=' + apiKey;

  return api.get<IGuest>(`getEmailGuestlist${_spaceId}${_apiKey}`, {
    validateStatus,
  });
};

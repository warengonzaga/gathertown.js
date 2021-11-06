import api from './ApiBase';
import validateStatus from './validateStatus';

export interface GetEmailGuestlistProps {
  spaceId: string;
  apiKey: string;
}

export const handleGetEmailGuestlist = ({ apiKey, spaceId }: GetEmailGuestlistProps) => {
  // TODO: Catch nullish value for params
  const formattedSpaceID = spaceId.replace(/\//gi, '\\');
  const _spaceId = '?spaceId=' + formattedSpaceID;
  const _apiKey = '&apiKey=' + apiKey;

  return api.get(`getEmailGuestlist${_spaceId}${_apiKey}`, {
    validateStatus,
  });
};

import type { MapType } from '../../types';
import api from '../apiBase';
import validateStatus from '../validateStatus';

export interface CreateSpaceProps {
  apiKey: string;
  name: string;
  map?: MapType;
  reason?: string;
  sourceSpace?: string;
}

export const handleCreateSpace = ({ apiKey, name, map, reason, sourceSpace }: CreateSpaceProps) => {
  // Required params
  const data: CreateSpaceProps = {
    apiKey,
    name,
  };

  // Optional params based on API Docs, sourceSpace is optional if map is provided and map is optional when sourceSpace is provided
  if (sourceSpace) {
    const formattedSpaceID = sourceSpace.replace(/\//gi, '\\');
    data.sourceSpace = formattedSpaceID;
  } else if (!map) {
    throw new Error('You must provide either a map or a sourceSpace');
  } else {
    data.map = map;
  }

  // Optional param
  if (reason) {
    data.reason = reason;
  }

  return api.post<string>('createRoom', data, {
    validateStatus,
  });
};

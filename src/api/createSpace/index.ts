import type { MapType } from '../../types';
import * as yup from 'yup';
import api from '../apiBase';
import validateStatus from '../validateStatus';

export interface CreateSpaceProps {
  apiKey: string;
  name: string;
  map?: MapType;
  reason?: string;
  sourceSpace?: string;
}

const createSpaceSchema = yup.object({
  apiKey: yup.string().required().trim(),
  name: yup.string().required().trim(),
  map: yup.string().trim(),
  reason: yup.string().trim(),
  sourceSpace: yup.string().trim(),
});

export const handleCreateSpace = async (props: CreateSpaceProps) => {
  try {
    const { apiKey, map, name, reason, sourceSpace } = await createSpaceSchema.validate(props);

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
      data.map = map as MapType;
    }

    // Optional param
    if (reason) {
      data.reason = reason;
    }

    return api.post<string>('createRoom', data, {
      validateStatus,
    });
  } catch (err) {
    const error: any = err;
    throw new Error(error.message);
  }
};

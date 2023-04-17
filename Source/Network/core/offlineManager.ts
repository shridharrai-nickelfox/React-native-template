/**
 * @description Manager for local API json call
 */

import {APIResponse} from './responseParser';

export default async function offlineManager(path: {
  data: any;
  code: number;
  message: string;
}): Promise<APIResponse> {
  const {data, code, message} = path;
  return new APIResponse(data, true, code, message);
}

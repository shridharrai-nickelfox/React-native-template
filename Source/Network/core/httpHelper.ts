import {APIConfig} from '../config/serverConfig';
import {NetworkAPIRouter} from '@network/data-access/network.interface';
import {Http_Methods_Types} from '@network/data-access/network.enum';


export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

/**
 * @description HTTP Methods
 */
export const HTTP_METHODS = {
  POST: Http_Methods_Types.POST,
  GET: Http_Methods_Types.GET,
  PUT: Http_Methods_Types.PUT,
  DEL: Http_Methods_Types.DEL,
  PATCH: Http_Methods_Types.PATCH,
};

/**
 * @description API Router
 */
export class APIRouter implements NetworkAPIRouter {
  baseURL: string;
  endpoint: string;
  method: HttpMethod;
  version: string | null;

  constructor(
    endpoint: string,
    method: HttpMethod,
    version: string | null = APIConfig.DEFAULT_VERSION,
  ) {
    this.baseURL = APIConfig.BASE_URL;
    this.endpoint = endpoint;
    this.method = method;
    this.version = version;
  }
}

/**
 * @description API Router with offline data
 */
export class APIWithOfflineRouter implements NetworkAPIRouter {
  baseURL: string;
  endpoint: string;
  method: HttpMethod;
  version: string | null;
  offlineJson: any;

  constructor(
    endpoint: string,
    method: HttpMethod,
    offlineJsonPath: any,
    version: string | null = APIConfig.DEFAULT_VERSION,
  ) {
    this.baseURL = APIConfig.BASE_URL;
    this.endpoint = endpoint;
    this.method = method;
    this.offlineJson = offlineJsonPath;
    this.version = version;
  }
}

/**
 * @description API Router with custom Base URL
 */
export class APICustomRouter implements NetworkAPIRouter {
  baseURL: string;
  endpoint: string;
  method: HttpMethod;
  version: string | null;

  constructor(baseUrl: string, endpoint: string, method: HttpMethod) {
    this.baseURL = baseUrl;
    this.endpoint = endpoint;
    this.method = method;
    this.version = null;
  }
}

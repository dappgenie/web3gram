import { AxiosInstance } from "axios";
import { IPaginatedResult } from "../interfaces";
import urlJoin from "url-join";

type CrudMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type Endpoint = [CrudMethod, string]

interface ICrudEndpoints {
  list: Endpoint;
  create: Endpoint;
  get: Endpoint;
  update: Endpoint;
  delete: Endpoint;
}

interface IListParams {
  page?: number;
  page_size?: number;
  search?: string;
  expand?: string[];
}

export function CrudService (endpoints: ICrudEndpoints) {
  return class _CrudService<TEntity=any, TCreatePayload=any, TUpdatePayload=any, TListParams extends IListParams=IListParams> {
    constructor(protected readonly agent: AxiosInstance, private readonly tenant: number = 1) {}
    
    async list(params: TListParams = {} as any): Promise<IPaginatedResult<TEntity>> {
      const [method, url] = endpoints.list;
      const { data } = await this.agent.request({
        method,
        url,
        params: {
          ...params,
          expand: params.expand?.join(',')
        },
        headers: {
          'x-tenant-id': this.tenant
        }
      });
      return data;
    }

    async create(payload: TCreatePayload, params?: any, headers?: any): Promise<TEntity> {
      console.log({ payload, params, headers });
      const [method, url] = endpoints.create;
      const { data } = await this.agent.request({
        method,
        url,
        data: payload,
        params,
        headers: {
          'x-tenant-id': this.tenant,
          ...(headers ?? {})
        }
      });
      return data;
    }

    async update(id: number, payload: TUpdatePayload, params?: any): Promise<TEntity> {
      const [method, urlTemplate] = endpoints.update;
      const url = urlTemplate.replace('{id}', id.toString());
      const { data } = await this.agent.request({
        method,
        url,
        data: payload,
        params,
        headers: {
          'x-tenant-id': this.tenant
        }
      });
      return data;
    }

    async delete(id: number, params?: any): Promise<TEntity> {
      const [method, urlTemplate] = endpoints.delete;
      const url = urlTemplate.replace('{id}', id.toString());
      const { data } = await this.agent.request({
        method,
        url,
        params,
        headers: {
          'x-tenant-id': this.tenant
        }
      });
      return data;
    }

    async get(id: number, params?: any): Promise<TEntity> {
      const [method, urlTemplate] = endpoints.get;
      const url = urlTemplate.replace('{id}', id.toString());
      const { data } = await this.agent.request({
        method,
        url,
        params,
        headers: {
          'x-tenant-id': this.tenant
        }
      });
      return data;
    }
  }
}

/* -------------------------------------------------------------------------- */
/*                                   HELPERS                                  */
/* -------------------------------------------------------------------------- */

interface ICreateEndpointOptions {
  updateMethod?: 'PUT' | 'PATCH';
}

export function createEndpointsFromBase(baseURL: string, options: ICreateEndpointOptions = {}): ICrudEndpoints {
  const { updateMethod = 'PUT' } = options;
  const specificURL = urlJoin(baseURL, '{id}/');
  return {
    list: ['GET', baseURL],
    create: ['POST', baseURL],
    get: ['GET', specificURL],
    update: [updateMethod, specificURL],
    delete: ['DELETE', specificURL],
  }
}
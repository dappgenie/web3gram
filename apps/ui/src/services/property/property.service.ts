import { AxiosInstance } from "axios";
import { IHotelListParams } from "./property.requests";
import { IProperty } from "./property.responses";
const ENDPOINTS = {
  HOTEL_LIST: {
    GET: '/property/search'
  },
  HOTEL_LIST_BY_ID: {
    GET: '/property/list'
  },
}

export class PropertyService {
  constructor(private readonly agent: AxiosInstance) {}
  async propertySearch(params: IHotelListParams): Promise<IProperty[]>{
    const { data } = await this.agent.get(ENDPOINTS.HOTEL_LIST.GET, {
      params: {
        ...params
      }
    });
    console.log("🚀 ~ file: property.service.ts ~ line 21 ~ PropertyService ~ propertySearch ~ data", data)
    return data;
  }
}

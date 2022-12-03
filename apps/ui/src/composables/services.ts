import axios from "axios";
import { PropertyService } from "~/services/property";
// import * as qs from 'qs';

const SERVICES = {
  property: PropertyService,
}
type ServiceMap = typeof SERVICES;


export function useService<TName extends keyof ServiceMap>(name: TName): InstanceType<ServiceMap[TName]> {
  // const auth = useAuthStore();
  // const agent = axios.create({
  //   baseURL: config.public.apiUrl,
  //   headers: {
  //     Authorization: auth.token ? `Bearer ${auth.token}` : undefined,
  //   },
  //   paramsSerializer(params) {
  //     return qs.stringify(params, { arrayFormat: 'brackets' });
  //   },
  // })
  // // attach error interceptor
  // agent.interceptors.response.use(
  //   (res) => res,
  //   (error: AxiosError) => {
  //     if (error.response) {
  //       if (error.response.status === 401) {
  //         auth.logout();
  //         navigateTo('/login');
  //       }
  //       throw error.response.data;
  //     }
  //     throw error;
  //   }
  // )

  const agent = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
      headers: {}
  })

  // create the service
  const Service = SERVICES[name];
  return new Service(agent) as InstanceType<ServiceMap[TName]>;
}

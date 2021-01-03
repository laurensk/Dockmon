import Axios, {AxiosResponse} from 'axios';
import {Container} from '../models/Container';
import {Summary} from '../models/Summary';
import {AuthUtils} from '../utils/AuthUtils';

export class ApiService {
  public static async loginWith(
    endpoint: string,
    username: string,
    password: string,
    callback: Function,
  ) {
    Axios.post(endpoint + '/api/auth', {
      Username: username,
      Password: password,
    })
      .then(async (res) => {
        if (res.data.jwt) {
          await AuthUtils.login(endpoint + '/api', res.data.jwt, username);
          callback(true);
        } else {
          callback(false);
        }
      })
      .catch((_) => callback(false));
  }

  public static async getData() {
    const authData = await AuthUtils.getAuth();
    let summary: Summary = new Summary(0, []);

    const res = await Axios.get(authData.endpoint + '/endpoints', {
      headers: {Authorization: `Bearer ${authData.token}`},
    });
    if (!res) return false;

    let endpoints: number[] = [];
    res.data.forEach((endpoint: any) => {
      endpoints.push(endpoint.Id);
    });
    summary.endpoints = endpoints.length;

    for (const endpoint of endpoints) {
      const containers = await this.getContainersForEndpoint(
        endpoint,
        authData,
      );
      summary.containers.push.apply(summary.containers, containers);
    }

    return summary;
  }

  private static async getContainersForEndpoint(
    endpoint: number,
    authData: {
      token: string | null;
      endpoint: string | null;
      user: string | null;
    },
  ) {
    const res = await Axios.get(
      authData.endpoint + '/endpoints/' + endpoint + '/docker/containers/json',
      {
        headers: {Authorization: `Bearer ${authData.token}`},
      },
    );
    if (!res) return [];
    const containers = res.data;
    let parsed: Container[] = [];
    containers.forEach((container: any) => {
      parsed.push(container as Container);
    });
    return parsed;
  }
}

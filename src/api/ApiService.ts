import Axios, {AxiosResponse} from 'axios';
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
}

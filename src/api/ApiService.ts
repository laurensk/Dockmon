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
        console.log(res.data);
        if (res.data.jwt) {
          await AuthUtils.login(endpoint + '/api', res.data.jwt);
          callback(true);
        } else {
          callback(false);
        }
      })
      .catch((_) => callback(false));
  }
}

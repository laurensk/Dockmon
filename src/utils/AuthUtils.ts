import AsyncStorage from '@react-native-async-storage/async-storage';

export class AuthUtils {
  private static DOCKMON_ENDPOINT: string = 'DOCKMON_ENDPOINT';
  private static DOCKMON_TOKEN: string = 'DOCKMON_TOKEN';
  private static DOCKMON_USER: string = 'DOCKMON_USER';

  public static async isAuth() {
    const auth = await AsyncStorage.getItem(this.DOCKMON_TOKEN);
    return auth == null ? false : !(auth.length <= 5);
  }

  public static async getAuth() {
    return {
      endpoint: await AsyncStorage.getItem(this.DOCKMON_ENDPOINT),
      token: await AsyncStorage.getItem(this.DOCKMON_TOKEN),
      user: await AsyncStorage.getItem(this.DOCKMON_USER),
    };
  }

  public static async login(endpoint: string, token: string, user: string) {
    await AsyncStorage.setItem(this.DOCKMON_ENDPOINT, endpoint);
    await AsyncStorage.setItem(this.DOCKMON_TOKEN, token);
    await AsyncStorage.setItem(this.DOCKMON_USER, user);
  }

  public static async logout() {
    await AsyncStorage.removeItem(this.DOCKMON_ENDPOINT);
    await AsyncStorage.removeItem(this.DOCKMON_TOKEN);
    await AsyncStorage.removeItem(this.DOCKMON_USER);
  }
}

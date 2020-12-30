import AsyncStorage from '@react-native-async-storage/async-storage';

export class AuthUtils {
  private static DOCKMON_TOKEN: string = 'DOCKMON_TOKEN';
  public static async isAuth() {
    const auth = await AsyncStorage.getItem(this.DOCKMON_TOKEN);
    return auth == null ? false : !(auth.length <= 5);
  }

  public static async getAuth() {
    return await AsyncStorage.getItem(this.DOCKMON_TOKEN);
  }

  public static async login(token: string) {
    await AsyncStorage.setItem(this.DOCKMON_TOKEN, token);
  }

  public static async logout() {
    await AsyncStorage.removeItem(this.DOCKMON_TOKEN);
  }
}

import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {Alert} from 'react-native';
import {NavigationSwitchProp} from 'react-navigation';

export class AuthUtils {
  private static DOCKMON_ENDPOINT: string = 'DOCKMON_ENDPOINT';
  private static DOCKMON_TOKEN: string = 'DOCKMON_TOKEN';
  private static DOCKMON_USER: string = 'DOCKMON_USER';
  private static DOCKMON_PASSWORD: string = 'DOCKMON_PASSWORD';

  public static async isAuth() {
    const auth = await AsyncStorage.getItem(this.DOCKMON_TOKEN);
    return auth == null ? false : !(auth.length <= 5);
  }

  public static async getAuth() {
    return {
      endpoint: await AsyncStorage.getItem(this.DOCKMON_ENDPOINT),
      token: await AsyncStorage.getItem(this.DOCKMON_TOKEN),
      user: await AsyncStorage.getItem(this.DOCKMON_USER),
      password: await AsyncStorage.getItem(this.DOCKMON_PASSWORD),
    };
  }

  public static async updateToken(token: string) {
    await AsyncStorage.setItem(this.DOCKMON_TOKEN, token);
  }

  public static async login(
    endpoint: string,
    token: string,
    user: string,
    password: string,
  ) {
    await AsyncStorage.setItem(this.DOCKMON_ENDPOINT, endpoint);
    await AsyncStorage.setItem(this.DOCKMON_TOKEN, token);
    await AsyncStorage.setItem(this.DOCKMON_USER, user);
    await AsyncStorage.setItem(this.DOCKMON_PASSWORD, password);
  }

  public static async logout() {
    await AsyncStorage.removeItem(this.DOCKMON_ENDPOINT);
    await AsyncStorage.removeItem(this.DOCKMON_TOKEN);
    await AsyncStorage.removeItem(this.DOCKMON_USER);
    await AsyncStorage.removeItem(this.DOCKMON_PASSWORD);
  }

  public static async logoutAlert(navigation: any) {
    Alert.alert('Are you sure?', 'You have to log in again to use Dockmon.', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await AuthUtils.logout();
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'Login'}],
            }) as any,
          );
        },
      },
    ]);
  }
}

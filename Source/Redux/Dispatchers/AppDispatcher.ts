// App wide dispatcher
import {Stores} from '../Stores/Store';
import {AppActions} from '@redux/Slices/AppSlice';

const AppDispatcher = {
  setUserLoggedIn: (data: any) => {
    Stores.dispatch(AppActions.SET_TOKEN(data.token));
    Stores.dispatch(AppActions.LOGIN(data));
  },
  setUserLoggedOut: () => {
    Stores.dispatch(AppActions.LOGOUT());
  },
  updateUserTokens: (data: any) => {
    Stores.dispatch(AppActions.SET_TOKEN(data));
  },
};

export default AppDispatcher;

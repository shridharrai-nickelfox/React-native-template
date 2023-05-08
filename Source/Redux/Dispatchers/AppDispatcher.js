// App wide dispatcher
import Stores from '../Stores/Store';
import { AppActions } from '@redux/Slices/AppSlice';

export default AppDispatcher = {
  setUserLoggedIn: data => {
    Stores.dispatch(AppActions.SET_TOKEN(data.tokens));
    Stores.dispatch(AppActions.LOGIN(data.user));
  },
  setUserLoggedOut: () => {
    Stores.dispatch(AppActions.LOGOUT());
  },
  updateUserTokens: data => {
    Stores.dispatch(AppActions.SET_TOKEN(data));
  },
};

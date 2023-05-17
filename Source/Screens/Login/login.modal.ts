import {API} from '../../Network/config/endpoints';
import networkManager from '../../Network/core/networkManager';

import AppDispatcher from '@redux/Dispatchers/AppDispatcher';

const useLoginModal = () => {
  const handleLogin = async (val: any) => {
    const instance = await networkManager(API.AUTH.LOGIN);
    const response = await instance.request(val);

    if (response.success) {
      console.log(response);
      AppDispatcher.setUserLoggedIn(response.data);
    }
    return response.success;
  };

  return {handleLogin};
};

export default useLoginModal;

// import {API, NetworkManager} from '@network/core';

import AppDispatcher from '@redux/Dispatchers/AppDispatcher';

const useLoginModal = () => {
  const handleLogin = async () => {
    // const response = (await NetworkManager(API.AUTH.LOGIN)).request();
    // console.log(response);
    AppDispatcher.setUserLoggedIn({token: '123456', user: {name: 'trail'}});
  };

  return {handleLogin};
};

export default useLoginModal;

import RootNavigation from '@navigators/RootNavigator';
import useLoginModal from './login.modal';

const useLoginController = () => {
  const LM = useLoginModal();
  const handleLogin = async (val: any) => {
    const response = await LM.handleLogin(val);
    if (response) {
      RootNavigation.navigate('Verifyotp');
    }
  };
  return {handleLogin};
};

export default useLoginController;

import RootNavigation from '@navigators/RootNavigator';
import useLoginModal from './loginModal';

const useLoginController = () => {
  const LM = useLoginModal();
  const handleLogin = () => {
    console.log('login');
    LM.handleLogin();
    RootNavigation.navigate('Verifyotp');
  };
  return {handleLogin};
};

export default useLoginController;
